import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { ModalInner, ModalOverlay, ModalWrapper } from "styles/Modal.style"

const Portal = ({ children, elementId }) => {
    const rootElement = useMemo(() => document.getElementById(elementId), [
        elementId,
    ])

    return createPortal(children, rootElement)
}


export const Modal = ({ className, onClose, maskClosable, closable, visible, children }) => {
    const [modalState, setModalState] = useState(visible);

    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
        return () => {
            const scrollY = document.body.style.top
            document.body.style.cssText = `position: ""; top: "";`
            window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
    }, [])

    const onMaskClick = () => {
        setModalState(false);
    }
    const close = () => {
        setModalState(false);
    }

    return (
        <Portal elementId="modal-root">
            <ModalOverlay visible={modalState} />
            <ModalWrapper
                className={className}
                tabIndex="-1"
                visible={modalState}
                onClick={maskClosable ? onMaskClick : null}
            >
                <ModalInner tabIndex="0" className="modal-inner">
                    {closable && <div style={{ cursor: "pointer" }} onClick={close}>X</div>}
                    {children}
                </ModalInner>
            </ModalWrapper>
        </Portal>
    )
}
