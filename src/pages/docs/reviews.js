import React, { useState } from 'react';

export default function Reviews() {
  const [form, setForm] = useState({ name: '', game: '', review: '' });
  const [reviews, setReviews] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, form]);
    setForm({ name: '', game: '', review: '' });
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="game">Game:</label><br />
          <input type="text" id="game" name="game" value={form.game} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="review">Review:</label><br />
          <textarea id="review" name="review" value={form.review} onChange={handleChange} rows={4} style={{ width: '100%' }} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
      <hr style={{ margin: '2rem 0' }} />
      <h2>Submitted Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((r, idx) => (
            <li key={idx} style={{ marginBottom: '1rem' }}>
              <strong>{r.game}</strong> by {r.name}<br />
              <em>{r.review}</em>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
