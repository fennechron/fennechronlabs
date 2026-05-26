import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Files, Search, GitBranch, Blocks, FileCode, X, XCircle, AlertTriangle, MousePointer2 } from 'lucide-react';

const codeBefore = `import { QuantumEngine } from '@fennechron/core';
import { optimizeNode } from './utils';

// Initiating hyper-scale cluster deployment...
export default async function LaunchSequence(req, res) {
  const engine = new QuantumEngine({
    mode: 'stealth',
    threads: `;

const codeAfter = `,
    encryption: 'aes-256-gcm'
  });

  await engine.connect();
  
  if (engine.status === 'READY') {
    const edgeNode = await engine.deployToEdge();
    console.log('Zero-downtime execution successful.');
    return res.status(200).json({ status: 'LIVE', latency: '2ms' });
  }

  throw new Error('System initialization failed.');
}`;

// Recreating exact VS Code "Dark+" Theme Syntax Highlighting
const highlightCode = (code) => {
  return code
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // 1. Comments (Dark Green)
    .replace(/(\/\/.*)/g, '<span class="text-[#6a9955] italic">$1</span>')
    // 2. Strings (Rustic Orange)
    .replace(/('.*?'|".*?")/g, '<span class="text-[#ce9178]">$1</span>')
    // 3. Control Keywords (Magenta)
    .replace(/\b(import|export|default|from|new|await|return|if|throw)\b/g, '<span class="text-[#c586c0]">$1</span>')
    // 4. Storage & Function Keywords (Blue)
    .replace(/\b(const|function|async)\b/g, '<span class="text-[#569cd6]">$1</span>')
    // 5. Classes & Types (Teal)
    .replace(/\b(QuantumEngine|Error)\b/g, '<span class="text-[#4ec9b0]">$1</span>')
    // 6. Functions (Pale Yellow)
    .replace(/\b(optimizeNode|LaunchSequence|connect|deployToEdge|json|log)\b/g, '<span class="text-[#dcdcaa]">$1</span>')
    // 7. Variables & Objects (Light Blue)
    .replace(/\b(req|res|engine|edgeNode|mode|threads|encryption|latency|status|console)\b/g, '<span class="text-[#9cdcfe]">$1</span>')
    // 8. Numbers (Light Green)
    .replace(/\b(\d+)\b/g, '<span class="text-[#b5cea8]">$1</span>');
};

export default function CodeEditorAnim() {
  const [editableText, setEditableText] = useState("'max'");
  const [showTypingCursor, setShowTypingCursor] = useState(false);
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const cursorControls = useAnimation();
  
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (isInView && !hasRun && targetRef.current) {
      setHasRun(true);
      
      const runAnim = async () => {
        // 1. Get exact position of the target text inside the code block
        const targetEl = targetRef.current;
        const top = targetEl.offsetTop;
        const left = targetEl.offsetLeft;

        // 2. Initial cursor position (hidden bottom right)
        await cursorControls.set({ x: left + 300, y: top + 200, opacity: 0 });
        
        // Wait a moment for user to absorb the full screen
        await new Promise(r => setTimeout(r, 1000));

        // 3. Move cursor to target text
        await cursorControls.start({ 
          x: left + 20, y: top + 10, opacity: 1,
          transition: { duration: 2.2, ease: [0.76, 0, 0.24, 1] }
        });

        // 4. Click animation (scale down & up)
        await cursorControls.start({ scale: 0.8, transition: { duration: 0.2 } });
        await cursorControls.start({ scale: 1, transition: { duration: 0.2 } });
        
        // Enable the blinking typing cursor
        setShowTypingCursor(true);

        // 5. Move mouse cursor slightly away so user can see typing
        cursorControls.start({ 
          x: left + 60, y: top + 40, 
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        });

        // 6. Delete text backspaces
        await new Promise(r => setTimeout(r, 400));
        let currentText = "'max'";
        while(currentText.length > 0) {
          currentText = currentText.slice(0, -1);
          setEditableText(currentText);
          await new Promise(r => setTimeout(r, 80)); // backspace speed
        }

        // 7. Type new text
        await new Promise(r => setTimeout(r, 400));
        const newText = "'infinite'";
        for(let i=1; i<=newText.length; i++) {
          setEditableText(newText.slice(0, i));
          await new Promise(r => setTimeout(r, 100)); // typing speed
        }

        // 8. Move cursor away and fade out
        await new Promise(r => setTimeout(r, 1000));
        setShowTypingCursor(false);
        await cursorControls.start({ 
          x: left + 200, y: top + 300, opacity: 0,
          transition: { duration: 2.2, ease: [0.76, 0, 0.24, 1] }
        });
      };

      runAnim();
    }
  }, [isInView, hasRun, cursorControls]);

  // Generate 23 line numbers for the gutter
  const lineNumbers = Array.from({ length: 23 }, (_, i) => i + 1);

  return (
    <section className="relative w-full py-32 bg-brand-black z-10 overflow-hidden px-4 md:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#007acc]/10 blur-[150px]" />
      </div>

      {/* VS Code Editor Full Width */}
      <div className="w-full" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#333333] shadow-[0_30px_70px_rgba(0,0,0,0.8)] relative z-10 flex flex-col"
        >
          {/* macOS / VS Code Title Bar */}
          <div className="w-full h-9 bg-[#323233] flex items-center px-4 text-[#cccccc] text-xs font-sans relative">
            <div className="flex gap-2 absolute left-4 z-10">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="w-full text-center opacity-70 flex-grow">
              stealth-deployment.ts - Fennechron Workspace
            </div>
          </div>

          {/* Main Editor Body */}
          <div className="flex w-full min-h-[500px]">
            
            {/* Activity Bar (Left Sidebar Icons) */}
            <div className="hidden sm:flex w-12 bg-[#333333] flex-col items-center py-4 gap-6 text-[#858585] shrink-0">
              <Files size={22} className="text-[#ffffff]" strokeWidth={1.5} />
              <Search size={22} strokeWidth={1.5} className="hover:text-white transition-colors" />
              <GitBranch size={22} strokeWidth={1.5} className="hover:text-white transition-colors" />
              <Blocks size={22} strokeWidth={1.5} className="hover:text-white transition-colors" />
            </div>
            
            {/* Editor Group */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e] w-full max-w-full overflow-hidden">
              
              {/* Tab Bar */}
              <div className="flex h-9 bg-[#252526] w-full">
                <div className="flex items-center px-4 bg-[#1e1e1e] text-[#cccccc] text-xs border-t border-[#007acc] gap-2 min-w-[150px] cursor-pointer">
                  <FileCode size={14} className="text-[#519aba]" />
                  stealth-deployment.ts
                  <X size={14} className="ml-auto opacity-50 hover:opacity-100" />
                </div>
              </div>
              
              {/* Breadcrumbs */}
              <div className="flex items-center h-6 px-4 bg-[#1e1e1e] text-[#cccccc] text-[10px] opacity-60 gap-1 font-sans border-b border-[#2d2d2d]">
                src <span className="mx-1">{'>'}</span> core <span className="mx-1">{'>'}</span> stealth-deployment.ts
              </div>
              
              {/* Actual Code Area */}
              <div className="flex-1 p-4 overflow-x-auto flex pb-8 relative">
                {/* Line Numbers Gutter */}
                <div className="flex flex-col text-right pr-4 text-[#858585] font-mono text-[13px] md:text-sm select-none opacity-40 shrink-0 border-r border-[#404040]">
                  {lineNumbers.map(num => (
                    <div key={num} className="leading-[1.7]">{num}</div>
                  ))}
                </div>
                
                {/* Typing Code Container */}
                <div className="pl-4 min-w-max relative font-mono text-[13px] md:text-sm leading-[1.7] text-[#d4d4d4]">
                  
                  {/* Cursor Overlay */}
                  <motion.div 
                    animate={cursorControls}
                    className="absolute z-50 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    style={{ top: 0, left: 0 }}
                  >
                    <MousePointer2 size={24} fill="black" stroke="white" strokeWidth={1.5} />
                  </motion.div>

                  <code dangerouslySetInnerHTML={{ __html: highlightCode(codeBefore) }} />
                  <code ref={targetRef} className="text-[#ce9178] relative z-10">
                    {editableText}
                    {showTypingCursor && (
                      <span className="animate-pulse bg-[#007acc] w-2 h-[1.1em] inline-block ml-0.5 align-middle opacity-80" />
                    )}
                  </code>
                  <code dangerouslySetInnerHTML={{ __html: highlightCode(codeAfter) }} />

                </div>
              </div>

            </div>
          </div>



        </motion.div>
      </div>

    </section>
  );
}
