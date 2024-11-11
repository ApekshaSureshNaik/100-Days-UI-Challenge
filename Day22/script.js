document.getElementById('advanced-search-btn').addEventListener('click', function() {
    var advancedSearch = document.getElementById('advanced-search');
    if (advancedSearch.style.display === 'none' || advancedSearch.style.display === '') {
        advancedSearch.style.display = 'flex';
    } else {
        advancedSearch.style.display = 'none';
    }
});

document.getElementById('apply-filters').addEventListener('click', function() {
    var checkInDate = document.getElementById('check-in').value;
    var checkOutDate = document.getElementById('check-out').value;
    var guests = document.getElementById('guests').value;
    var roomType = document.getElementById('room-type').value;
    
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Guests:', guests);
    console.log('Room Type:', roomType);
    
    // Here you would typically perform the search with the filters
});
