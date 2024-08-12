import React from 'react'

export default function Alert({alert}) {
  return (
    <div className='alert'>
      {alert&&(<div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
              <strong>{ alert.title}</strong> {alert.message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>)}
    </div>
  )
}
