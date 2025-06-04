document.querySelectorAll('.heart-wrapper').forEach(wrapper => {
    const movieId = wrapper.getAttribute('data-id');

    wrapper.addEventListener('click', () => {
        fetch('like.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `movie_id=${encodeURIComponent(movieId)}`
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'liked') {
                    wrapper.classList.add('filled');
                } else if (data.status === 'unliked') {
                    wrapper.classList.remove('filled');
                } else {
                    console.error('خطا:', data.error);
                }
            })
            .catch(error => {
                console.error('خطای Ajax:', error);
            });
    });
});
