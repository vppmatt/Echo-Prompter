def GIT_URL = "https://github.com/vppmatt/Echo-Prompter.git"

pipeline {
    agent any
    options {
        timeout(time: 300, unit: "SECONDS")
    }
    stages {

        stage('GetFromGithub') {
            steps {
                git branch: 'main', url: GIT_URL
            }
        }
       
        stage("CreateDockerImage") {
            steps {
                script {
                    sh "docker build -t teleprompter:latest ."
                }
            }
        }

    }
}