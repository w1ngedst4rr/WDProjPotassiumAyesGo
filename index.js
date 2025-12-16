
            let questionnum = 0
            let container = document.getElementById('flashcard-container');
            let qgrouplist = []
            let agrouplist = []
            let qgroup = [];
            let agroup = [];
            let pastY;

            function update() {
                localStorage.clear;
            }

            function CreateFlashcard() {

                questionnum += 1;

                const question = document.getElementById("Question");
                const answer = document.getElementById("Answer");
                const flashcard = document.getElementById('zilch');
                const container = document.getElementById('flashcard-container');
                const paragraph = flashcard.getElementsByTagName('p');
                const empty = '<div class="flashcard " id="zilch"><p></p><p style="opacity: 0;"></p><button id="reveal" onclick="RevealAnswer(this)">Reveal Answer</button></div>'
                
                const tanong = paragraph[0];
                const sagot = paragraph[1];

                const Qv = question.value;
                const Av = answer.value;

                localStorage.setItem('question' + questionnum, Qv)
                localStorage.setItem('answer' + questionnum, Av)

                tanong.textContent = localStorage.getItem('question' + questionnum)
                sagot.textContent = localStorage.getItem('answer' + questionnum)

                flashcard.id = 'Q' + questionnum;
                flashcard.lastChild.id = 'B' + questionnum;  

                container.innerHTML += empty;

            }          
            
            function RevealAnswer(x) {
                let button = document.getElementById(x.id);
                let div = button.parentNode;
                let divelem = div.children;

                div.children[1].style.opacity = '100';
            }
            

            function SelectGroup() {
                const flashcard = container.children
                const button = container.getElementsByTagName('button')
                const groupselect = document.getElementById('group-select')
                for (i = 0; i < button.length; i++) {
                    let temp = flashcard[i]
                    let orary = button[i]

                    button[i].style.backgroundColor = "#e61717";
                    button[i].textContent = "Select";
                    orary.setAttribute('onclick', "SelectFlashcard(this)")

                }

                groupselect.textContent = "Finished?"
                groupselect.setAttribute('onclick', "RemoveSelect()")
                groupselect.style.backgroundColor = "#e61717"


            }

            function SelectFlashcard(x) {
                let button = document.getElementById(x.id);
                let div = button.parentNode;
                let divelem = div.children;

                button.style.backgroundColor = "#303030"

                for (i = 0; i < container.children.length; i++) {
                    if (qgroup[i] == undefined || qgroup[i] == null) {
                        qgroup[i] = divelem[0].textContent
                        agroup[i] = divelem[1].textContent
                        break;
                    }
                }
                 
            }

            function ThisString(qgroup, agroup) {
               if (localStorage.getItem('qgroup') != null || localStorage.getItem('agroup') != null) {
                    localStorage.removeItem('qgroup');
                    localStorage.removeItem('agroup');

                    localStorage.setItem('qgroup', JSON.stringify(qgroup));
                    localStorage.setItem('agroup', JSON.stringify(agroup));
                } else {
                    localStorage.setItem('qgroup', JSON.stringify(qgroup));
                    localStorage.setItem('agroup', JSON.stringify(agroup));
                } 
            }

            function RemoveSelect() {

                ThisString(qgroup, agroup)

                const groupselect = document.getElementById('group-select');
                const button = container.getElementsByTagName('button')
                const flashcard = container.children;
                for (i = 0; i < button.length; i++) {
                    let temp = flashcard[i];
                    let orary = button[i];

                    orary.textContent = "Reveal Answer";
                    orary.setAttribute('onclick', "RevealAnswer(this)")
                    orary.setAttribute('style', 'background-color: #004dc9')

                }

                groupselect.setAttribute('onclick', 'SelectGroup()')
                groupselect.textContent = "Select Group?"
                groupselect.removeAttribute('style', 'background-color: #004dc9');
                groupselect.setAttribute('style', 'background')


            }
