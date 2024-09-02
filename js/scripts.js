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
                
                newTask: {
                    text: '',
                    done: false
                }
            }
        },
        methods: {
            addTask() {
                if (this.newTask != '') {
                    this.todos.push({
                        ...this.newTask
                    });

                    this.newTask.text = '';
                }
                
            },
            removeTask(i) {
                this.todos.splice(i, 1);
            }
        }
    }).mount('#app');