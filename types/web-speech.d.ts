declare global {
  interface SpeechRecognition extends EventTarget {
    start(): void;
    stop(): void;
    abort(): void;
    onaudiostart?: (ev: any) => void;
    onsoundstart?: (ev: any) => void;
    onspeechstart?: (ev: any) => void;
    onsoundend?: (ev: any) => void;
    onspeechend?: (ev: any) => void;
    onresult?: (ev: any) => void;
    onnomatch?: (ev: any) => void;
    onerror?: (ev: any) => void;
    onstart?: (ev: any) => void;
    onend?: (ev: any) => void;
    lang?: string;
    continuous?: boolean;
    interimResults?: boolean;
    maxAlternatives?: number;
  }
  interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
  }
  interface Window {
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
    SpeechRecognition?: SpeechRecognitionConstructor;
  }
}
export {};
