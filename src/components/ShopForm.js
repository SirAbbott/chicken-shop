import React from 'react'

const ShopForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Website</label>
        <div className="control">
          <input
            className="input"
            placeholder="Website"
            name="origin"
            onChange={handleChange}
            value={data.website}
          />
        </div>
      </div>
      <button className="button is-info">Submit</button>
    </form>
  )
}

export default ShopForm
