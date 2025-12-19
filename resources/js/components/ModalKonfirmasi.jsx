import React from 'react';

export default function ModalKonfirmasi({ open, title, message, onOk, onCancel, okText = 'Hapus', cancelText = 'Batal', okColor = '#c12b1f' }) {
    if (!open) return null;
    return (
        <div className="modal-confirm-overlay">
        <div className="modal-confirm-content">
            <button onClick={onCancel} className="modal-close">&times;</button>
            <div className="modal-title">{title}</div>
            <div className="modal-msg">{message}</div>
            <div className="modal-btn-row">
            <button onClick={onCancel} className="modal-cancel">{cancelText}</button>
            <button onClick={onOk} className="modal-ok" style={{ background: okColor }}>{okText}</button>
            </div>
        </div>
        <style>{`
            .modal-confirm-overlay {
            position: fixed; inset: 0; background: rgba(40,28,12,0.15); z-index: 99;
            display: flex; align-items: center; justify-content: center;
            }
            .modal-confirm-content {
            background: #fff; border-radius:19px; padding:32px 36px 24px 36px; box-shadow:0 8px 44px #5439132b;
            min-width: 330px; max-width: 90vw; position: relative;
            }
            .modal-title { font-size:1.25rem; font-weight:800; color:#2d1802; font-family:"Plus Jakarta Sans",sans-serif; margin-bottom:11px; }
            .modal-msg { color:#2b2b2b; font-size:1.01rem; margin-bottom:27px;}
            .modal-btn-row { display:flex; gap:18px; justify-content: flex-end; }
            .modal-ok {
            padding:8px 28px;font-weight:700;background:${okColor};color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:1.04rem;
            transition:filter 0.15s;
            }
            .modal-ok:hover { filter:brightness(1.10);}
            .modal-cancel {
            background:#efeff3; color:#585757; font-weight:600; border:none; font-size:1.01rem;
            border-radius:8px; padding:8px 26px; cursor:pointer; transition:background 0.16s;
            }
            .modal-cancel:hover { background:#e0e0e0;}
            .modal-close { background:none;border:none;font-size:1.45rem;color:#bfa751;position:absolute;top:13px;right:18px;cursor:pointer; }
        `}</style>
        </div>
    );
}
