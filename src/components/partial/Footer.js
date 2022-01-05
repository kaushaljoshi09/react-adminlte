import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* /.content-wrapper */}
            <footer className="main-footer">
                <strong>Copyright © {new Date().getFullYear() - 9}-{new Date().getFullYear()}</strong>  All rights reserved.
            </footer>
        </div>
    )
}