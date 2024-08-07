// ADD CINEMA OPEN - CLOSE BUTTON FUNCTION

let ref_closeBtn = document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("addFormInner").style.display = "none";
})

let ref_addHeaderBtn = document.getElementById("addHeaderBtn").addEventListener("click", function () {
    document.getElementById("addFormInner").style.display = "block";
});

// ****************************************** 

let updateIndex = null;

const handleAddCinema = async () => {

    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let facility = document.getElementById("facilities").value;

    let data = {
        name,
        location,
        facility
    }
    console.log(data);

    try {
        if (updateIndex) {
            const Response = await putRequest('cinema/' + updateIndex, data);
            console.log(Response);
        } else {
            const Response = await postRequest('cinema', data);
            console.log(Response);
        }
    } catch (error) {
        console.log(error);
    }

    updateIndex = null;

    ShowDisplay();

    event.preventDefault();

}

const handleDelet = async (id) => {
    try {
        await deleteRequest('cinema/' + id)
    } catch (error) {
        console.log(error);
    }
}

const handleEdit = async (id) => {
    try {
        const data = await getRequest('cinema');

        let Index = data.findIndex((v) => v.id === id);
        document.getElementById("name").value = data[Index].name;
        document.getElementById("location").value = data[Index].location;
        document.getElementById("facilities").value = data[Index].facility;
        updateIndex = id;

    } catch (error) {
        console.log(error);
    }
}

const ShowDisplay = async () => {
    try {
        const data = await getRequest('cinema');
        let print = '';
        data.map((value, i) => {
            if (i === 0) {
                print += '<tr>';
                print += '<td>' + i + '</td>';
                print += '<td>' + value.name + '</td>';
                print += '<td>' + value.location + '</td>';
                print += '<td>' + value.facility + '</td>';
                print += '<td><button onclick=handleDelet(' + value.id + ')><i class="fa-solid fa-trash delete-icon"></i></button> '+' <button onclick=handleEdit(' + value.id + ')><i class="fa-solid fa-pen-to-square"></i></button> </td>';
                print += '</tr>';
            }
            else {
                print += '<tr>';
                print += '<td>' + i + '</td>';
                print += '<td>' + value.name + '</td>';
                print += '<td>' + value.location + '</td>';
                print += '<td>' + value.facility + '</td>';
                print += '<td><button onclick=handleDelet(' + value.id + ')><i class="fa-solid fa-trash delete-icon"></i></button> '+' <button onclick=handleEdit(' + value.id + ')><i class="fa-solid fa-pen-to-square"></i></button> </td>';
                print += '</tr>';
            }
        })
        document.getElementById("dataTable").innerHTML = print;
    } catch (error) {
        console.log(error);
    }
}

const AddCinemaRef = document.getElementById("addForm").addEventListener("submit", handleAddCinema);
window.onload = ShowDisplay;