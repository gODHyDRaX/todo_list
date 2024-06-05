document.addEventListener('DOMContentLoaded', (event) => {
    let btn = document.querySelector(".btn");
    let root = document.querySelector(".root");

    btn.addEventListener("click", async () => {
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modalT">
                <div class="modaltitle">
                    Add Task <div class="close">x</div>
                </div>
                <h2>Task Name</h2>
                <input type="text" placeholder="Enter task name" class="texto">
                <div class="btnsM">
                    <div class="btn1">Add</div>
                </div>
            </div>
        `;

        root.appendChild(modal);

        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('.btn1').addEventListener('click', () => {
            let lista = document.querySelector(".lista");
            let texto = modal.querySelector(".texto");
            let Infotarea = texto.value;

            if (Infotarea.trim() !== "") {  // Verifica que el input no esté vacío
                let tarea = document.createElement("div");
                tarea.classList.add("tarea")
                tarea.innerHTML = `
                    <h2>${Infotarea}</h2> <input type="checkbox">
                `;
                lista.appendChild(tarea);
                modal.remove();
            } else {
                alert("Please enter a task name.");
            }
        });
    });
});
