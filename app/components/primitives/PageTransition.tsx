import { gsap } from "gsap";
import { useRef } from "react";
import { useLocation } from "@remix-run/react";
import { SwitchTransition, Transition } from "react-transition-group";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const nodeRef = useRef(null);
  const location = useLocation();

  const onEnter = () => {
    const tl = gsap.timeline({});
    tl.fromTo(
      nodeRef.current,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 2,
      }
    );
  };

  const onExit = () => {
    const tl = gsap.timeline({});
    tl.fromTo(
      nodeRef.current,
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        duration: 2,
      }
    );
  };

  return (
    <SwitchTransition mode="out-in">
      <Transition
        key={location.pathname}
        timeout={2000}
        nodeRef={nodeRef}
        onEnter={onEnter}
        onExit={onExit}
      >
        <div ref={nodeRef}>{children}</div>
      </Transition>
    </SwitchTransition>
  );
}
