// Sample JSON data (replace this with a fetch call to your backend if needed)
let timetableData = {
    "classes": [
       "AGEL6_J24",
        "AGEL6_J25",
        "AGEL6_M24",
        "AGEL6_S24",
        "AUTL4_J24",
        "AUTL4_J25",
        "AUTL4_M24",
        "AUTL4_S24",
        "AUTL5_J24",
        "AUTL5_J25",
        "AUTL5_M24",
        "AUTL5_S24-A",
        "AUTL5_S24-B",
        "AUTL6_J24",
        "AUTL6_J25",
        "AUTL6_M24",
        "AUTL6_S24",
        "BTEL5_J25",
        "BTEL6_J24",
        "BTEL6_J25",
        "BTEL6_S24",
        "CAUE_M23",
        "CAUE_S23",
        "CBCT_S23",
        "CCAM_J23",
        "CCAM_M23",
        "CENL6_J24",
        "CENL6_J25",
        "CENL6_S24",
        "CFBV_J23",
        "CFBV_M23",
        "CFBV_S23",
        "CICT_S23",
        "CIST_M23",
        "CIST_S23",
        "CMPR_M23",
        "CMPR_S23",
        "CNDT_J23",
        "CNDT_M23",
        "CSCD_J23",
        "CSCD_M23",
        "CSCD_S23",
        "CSES_M23",
        "CSES_S23",
        "CSL6_J25",
        "CSL6_S24",
        "CWFA_M23",
        "CWFA_S23",
        "DAUE_J23",
        "DAUE_M22",
        "DAUE_M23",
        "DAUE_S22",
        "DAUE_S23",
        "DCAM_J23",
        "DCAM_S23",
        "DFBV_J23",
        "DFBV_M23",
        "DFBV_S23",
        "DFML5_J24",
        "DFML5_M24",
        "DGAR_J24",
        "DGAR_J25",
        "DICT_S23",
        "DIST_S23",
        "DLAS_S23",
        "DMPL_J23",
        "DMPL_M22",
        "DMPL_M23",
        "DMPL_S22",
        "DMPL_S23",
        "DMPR_M23",
        "DMPR_S23",
        "DNDT_J23",
        "DNDT_J25",
        "DNDT_M22",
        "DNDT_S23",
        "DSCD_J24",
        "DSCD_M23",
        "DSCD_S22",
        "DSCD_S23",
        "DSES_S23",
        "DWAT_S23",
        "EEPL6_J24",
        "EEPL6_J25",
        "EEPL6_M24",
        "EEPL6_S24",
        "EITL4_J25",
        "EITL4_M24",
        "EITL4_S24-A",
        "EITL4_S24-B",
        "EITL4_S24-C",
        "EOPL5_J24",
        "EOPL5_J25",
        "EOPL5_M24",
        "EOPL5_S24-A",
        "EOPL5_S24-B",
        "FPCL4_J24",
        "FPCL4_J25-B",
        "FPCL4_J25",
        "FPCL4_M24",
        "FPCL4_S24-A",
        "FPCL4_S24-B",
        "FPCL4_S24-C",
        "FPCL5_J24",
        "FPCL5_J25-B",
        "FPCL5_J25A",
        "FPCL5_M24 - Copy",
        "FPCL5_M24",
        "FPCL5_S24-A",
        "FPCL5_S24-B",
        "FPCL6_J24",
        "FPCL6_J25",
        "FPCL6_M24",
        "FPCL6_S24",
        "HKL5_J25",
        "HKL5_S25",
        "HPL4_J24",
        "HPL4_J25",
        "HPL4_M24",
        "HPL4_S24",
        "HPL5_J24",
        "HPL5_J25",
        "HPL5_M24",
        "HPL5_S24",
        "ICTL4_J25",
        "ICTL5_J24",
        "ICTL5_J25",
        "ICTL5_M24",
        "ICTL5_S24",
        "ICTL6_J24",
        "ICTL6_M24",
        "LILS6_J25",
        "LISL5_J24",
        "LISL5_J25",
        "LISL5_M24",
        "LISL5_S24",
        "LISL6_J24",
        "LISL6_M24",
        "LISL6_S24",
        "MASL4_J25",
        "MASL4_M24",
        "MASL4_S24",
        "MPDL4_J25",
        "MPDL4_M24",
        "MPDL4_S24",
        "MPDL5_J25",
        "MPDL5_M24",
        "MPDL5_S24",
        "MPDL6_J24",
        "MPDL6_J25",
        "MPDL6_M24",
        "MPDL6_S24",
        "MPL6_M24",
        "MPL6_S24",
        "MPTL5_J25",
        "MPTL5_M24",
        "MPTL6_J24",
        "MPTL6_J25",
        "NDTL5_J25",
        "NDTL5_M24",
        "NDTL5_S24",
        "NDTL6_J25",
        "NDTL6_M24",
        "NDTL6_S24",
        "OADL5_J24",
        "OADL5_J25",
        "OADL5_M24",
        "OADL5_S24",
        "OADL6_J24",
        "OADL6_J25",
        "OADL6_M24",
        "OADL6_S24",
        "PLUL4_J25",
        "PLUL4_M24",
        "PLUL5_J24",
        "PLUL5_J25",
        "SARDL5_J25",
        "SARDL5_M24",
        "SARDL5_S24",
        "SOWL5_J24",
        "SOWL5_J25",
        "SOWL5_M24",
        "SOWL5_S24",
        "SOWL6_J24",
        "SOWL6_J25",
        "SOWL6_M24",
        "SOWL6_S24",
        "WGML4_J25",
        "WGML4_M24",
        "WGML4_S24",
        "WGML5_J25",
        "WGML5_M24"
        // Add the rest of your JSON data here
    ]
};

// Pagination variables
const itemsPerPage = 10;
let currentPage = 1;

// Populate the timetable list
const timetableList = document.getElementById('timetableList');
const searchInput = document.getElementById('searchInput');
const paginationControls = document.createElement('div');
paginationControls.className = 'pagination-controls';
document.body.appendChild(paginationControls);

function renderTimetables(filter = '') {
    timetableList.innerHTML = '';
    const filteredTimetables = timetableData.classes.filter(item =>
        item.toLowerCase().includes(filter.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTimetables.length / itemsPerPage);
    if (currentPage < 1 || currentPage > totalPages) {
        currentPage = 1; // Reset to a valid page
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedTimetables = filteredTimetables.slice(startIndex, endIndex);

    paginatedTimetables.forEach(timetable => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `pdfs/${timetable}.pdf`;
        link.download = timetable;
        link.textContent = 'Download';

        // Handle file not found error
        link.addEventListener('error', () => {
            const errorMessage = document.createElement('div');
            errorMessage.textContent = `Error: The file "${timetable}.pdf" could not be found.`;
            errorMessage.style.color = 'red';
            timetableList.appendChild(errorMessage);
        });

        listItem.innerHTML = `<span>${timetable}</span>`;
        listItem.appendChild(link);
        timetableList.appendChild(listItem);
    });

    renderPaginationControls(totalPages);
}

function renderPaginationControls(totalPages) {
    paginationControls.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = i === currentPage ? 'active' : '';
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderTimetables(searchInput.value);
        });
        paginationControls.appendChild(pageButton);
    }
}

// Fetch timetable data from API
fetch('/api/timetables')
    .then(response => response.json())
    .then(data => {
        timetableData = data;
        renderTimetables();
    });

// Add search functionality
searchInput.addEventListener('input', (e) => {
    currentPage = 1; // Reset to the first page on a new search
    renderTimetables(e.target.value);
});
