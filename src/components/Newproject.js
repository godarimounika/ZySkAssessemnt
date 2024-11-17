import React from 'react'
import "./Newproject.css"

function Newproject() {
    return (
        <div className='new-prj'>
            <div className='newPrj-icon'>
                <img src='/Feature/Logomark (4).png' alt='logomark' />
                <span>Sisyphus</span>
            </div>
            <div>
                <p  className='new-header'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
            </div>
            <div className='newprj-profile'>
                <img src='/Feature/image-company.png' />
                <p className='newprj-title'>Candice wu</p>
                <p className='newprj-text'>Product Manager, Sisyphus</p>
            </div>
        </div>
    )
}

export default Newproject