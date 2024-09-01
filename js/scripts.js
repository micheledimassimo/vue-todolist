const { createApp } = Vue;

    createApp({
        data() {
            return {
                todos: [
                    {
                        text: 'spesa',
                        done: false
                    },
                    {
                        text: 'esercizio js',
                        done: true
                    },
                    {
                        text: 'pulizia casa',
                        done: false
                    }
                ],
                verified: '',
                newTask: {
                    text: '',
                    done: ''
                }
            }
        },
        methods: {
            addTask() {
                if (this.newTask.text != '') {
                    this.todos.push(this.newTask.text);

                    this.newTask.text = '';
                }
                
            },
            removeTask(i) {
                this.todos.splice(i, 1);
            }
        }
    }).mount('#app');