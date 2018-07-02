#!/usr/bin/env groovy
@Library('Jenkinsfile-common')
import com.abc.mediait.BeanstalkDeployRequest
import com.abc.mediait.BeanstalkUploadRequest

node('datg-jenkins-linux-storyline-2') {
    properties([pipelineTriggers([[$class: 'GitHubPushTrigger']])])
    properties([[$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5']]])
    stage('Lint') {}
    stage('Test') {}
    stage('Build') {}
    stage('Run Test Example') {}
}
