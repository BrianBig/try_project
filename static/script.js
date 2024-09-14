// Crear el módulo de AngularJS
var app = angular.module('myApp', []);

// Crear el controlador principal
app.controller('MainController', function($scope, $http) {

    // Inicializar los programas
    $scope.programas = [];
    $scope.formData = {}; // Para manejar los datos del formulario

    // Obtener todos los programas
    $scope.getDataProgram = function() {
        $http.get('/getData')
        .then(function(response) {
            $scope.programas = response.data; // Guardar los datos en el scope
        })
        .catch(function(error) {
            console.error('Error al obtener los datos:', error);
        });
    };

    // Crear un nuevo programa
    $scope.createProgram = function() {
        $http.post('/addData', $scope.formData)
        .then(function(response) {
            alert(response.data.message);
            $scope.getDataProgram(); // Actualizar la lista
            $scope.formData = {}; // Limpiar el formulario
        })
        .catch(function(error) {
            console.error('Error al crear el programa:', error);
        });
    };

    // Actualizar un programa
    $scope.updateProgram = function(id) {
        $http.put('/updateData/' + id, $scope.formData)
        .then(function(response) {
            alert(response.data.message);
            $scope.getDataProgram(); // Actualizar la lista
            $scope.formData = {}; // Limpiar el formulario
        })
        .catch(function(error) {
            console.error('Error al actualizar el programa:', error);
        });
    };

    // Eliminar un programa
    $scope.deleteProgram = function(id) {
        if (confirm('¿Estás seguro de eliminar este programa?')) {
            $http.delete('/deleteData/' + id)
            .then(function(response) {
                alert(response.data.message);
                $scope.getDataProgram(); // Actualizar la lista
            })
            .catch(function(error) {
                console.error('Error al eliminar el programa:', error);
            });
        }
    };

    // Cargar los programas al inicio
    $scope.getDataProgram();
});
