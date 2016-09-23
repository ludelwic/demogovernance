var govApp = angular.module('governanceApp', []);

govApp.controller('GovernanceController', function GovernanceController($scope) {
    $scope.templates = [
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Small',
                specs: '1 CPU, 3.5 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsSmall%2Fazuredeploy.json',
                needsApproval: false
            },
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Medium',
                specs: '2 CPU, 7.0 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsMedium%2Fazuredeploy.json',
                needsApproval: false
            },
            {
                type: 'Windows Server 2012 R2 DE',
                size: 'Large',
                specs: '8 CPU, 28 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FWindowsLarge%2Fazuredeploy.json',
                needsApproval: true
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Small',
                specs: '1 CPU, 3.5 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxSmall%2FLinuxVirtualMachine.json',
                needsApproval: false
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Medium',
                specs: '2 CPU, 7.0 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxMedium%2FLinuxVirtualMachine.json',
                needsApproval: false
            },
            {
                type: 'Linux Server Ubuntu',
                size: 'Large',
                specs: '8 CPU, 28 GB RAM',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FLinuxLarge%2FLinuxVirtualMachine.json',
                needsApproval: true
            },
            {
                type: 'SQL Database + Web App',
                size: 'Small',
                specs: '5GB',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FSQLDatabase%2Fazuredeploy.json',
                needsApproval: false
            },
            {
                type: 'SQL Server AlwaysOn',
                size: 'Medium',
                specs: '5 VMs',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fsqlvm-alwayson-cluster%2Fazuredeploy.json',
                needsApproval: true
            },
            {
                type: 'SAP Netweaver',
                size: '3 tier',
                specs: '30.000 SAPS',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Fsap-3-tier-marketplace-image%2Fazuredeploy.json',
                needsApproval: true
            },
            {
                type: 'LAMP on Ubuntu',
                size: 'A2 VM',
                specs: 'Ubunty, MySQL, Apache and PHP',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2Flamp-app%2Fazuredeploy.json',
                needsApproval: false
            },
            {
                type: 'Storage',
                size: 'LRS',
                specs: '500TB',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2Fludelwic%2Fdemogovernance%2Fmaster%2Fdemogovernance%2FTemplates%2FStorageAccount%2Fazuredeploystorage.json',
                needsApproval: false
            }
            ,
            {
                type: 'Virtual Network',
                size: 'Standard',
                specs: '2 subnets',
                uri: 'https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2Fazure-quickstart-templates%2Fmaster%2F101-vnet-two-subnets%2Fazuredeploy.json',
                needsApproval: false
            }
        
    ];

    $scope.showTable = true;

    $scope.changeView = function () {
        $scope.showTable = !$scope.showTable;
    };
});