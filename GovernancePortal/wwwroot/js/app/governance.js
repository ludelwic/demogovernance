var govApp = angular.module('governanceApp', []);

govApp.controller('GovernanceController', function GovernanceController($scope) {
    $scope.templates = [
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Small',
                specs: '1 CPU, 3.5 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsSmall%2Fazuredeploy.json',
                needsApproval: false
            },
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Medium',
                specs: '2 CPU, 7.0 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsMedium%2Fazuredeploy.json',
                needsApproval: false
            },
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Large',
                specs: '8 CPU, 28 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsLarge%2Fazuredeploy.json',
                needsApproval: true
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Small',
                specs: '1 CPU, 3.5 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxSmall%2FLinuxVirtualMachine.json',
                needsApproval: false
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Medium',
                specs: '1 CPU, 3.5 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxMedium%2FLinuxVirtualMachine.json',
                needsApproval: false
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Large',
                specs: '1 CPU, 3.5 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxLarge%2FLinuxVirtualMachine.json',
                needsApproval: true
            },
            {
                type: 'SQL Database + Web App',
                size: 'Small',
                specs: '5GB',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FSQLDatabase%2Fazuredeploysqldbwebapp.json',
                needsApproval: false
            },
            {
                type: 'Storage',
                size: 'LRS',
                specs: '500TB',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernace%2Fmaster%2Fdemogovernance%2FTemplates%2FStorageAccount%2Fazuredeploystorage.json',
                needsApproval: false
            }
    ];
});