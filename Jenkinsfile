pipeline {
		agent any

		environment {
            //git source info
			gitRepository_source = 'http://gitlab.eztek.net/fek3/fe_thithu1/cuong.git'
			gitBranch_source = 'main'
			gitlabCredential = 'gitlab_jenkin'

			//git manifest info
			gitRepository_manifest = 'http://gitlab.eztek.net/kubernetes/manifest.git'
			gitBranch_manifest = 'main'

            // registry info
			dockerregistry = 'https://nexus.eztek.net'
			registryCredential = 'nexus_jenkin'

            //image info
			dockerimagename = "nexus.eztek.net/thithu1/cuong"
    		dockerImage = ""
			version = "build-0.${BUILD_NUMBER}"
            dockerimage_tag = "nexus-dev.eztek.net/${dockerimagename}"
		}

		stages {
			stage('Checkout project')
			{
			  steps
			  {
				git branch: gitBranch_source,
				   credentialsId: gitlabCredential,
				   url: gitRepository_source
				sh "git reset --hard"
			  }
			}
			stage('Build docker')
			{
			    agent any
			  steps
			  {
				script {
                        sh "echo ${dockerimage_tag}"
						dockerImage = docker.build dockerimagename
					}
			  }
			}
			stage('Pushing Image')
			{
      		  steps
			  {
        		script {
				//login registry
           		 docker.withRegistry( dockerregistry , registryCredential ) {
              	 dockerImage.push(version)
				 sh "docker rmi ${dockerimagename}:${version} -f"
                 sh "docker rmi ${dockerimagename}:lastest -f"
           		 }
          		}
        	  }
    	    }
			stage('Update Manifest File')
			{
      		  steps
			  {
				git branch: gitBranch_manifest,
				   credentialsId: gitlabCredential,
				   url: gitRepository_manifest
				sh "git reset --hard"
				script {
                        sh "pwd"
						sh "sed -i 's+${dockerimagename}.*+${dockerimagename}:${version}+g' thithu/cuong-deployment.yaml"
						sh "git add ."
						sh "git commit -m '[update] manifest file tag image'"
						sh "git config remote.origin.push HEAD"
						sh "git push"
					}
			  }
            }
		}
	}
