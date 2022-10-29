using System;

namespace multitomas
{
    class program
    {
        static void Main(String[] args)
        {
            var cadena_casos = "";
            var linea_no_casos = 0;
            var i = 0;
            var validacion = true;
            List<int> ingresos = new List<int>();
            List<int> lista = new List<int>();

            do 
            {
                //Console.WriteLine("El numero de casos de prueba debe ser entre 1 y 20. ");
                cadena_casos = Console.ReadLine();
                linea_no_casos = int.Parse(cadena_casos.Split(' ')[0]);
            }
            while(linea_no_casos >20 || linea_no_casos <1);

            while (i < linea_no_casos)
            {
                do{
                    //Console.WriteLine("Ingrese el caso n°: " + (i+1));
                    string caso = Console.ReadLine();
                    string[] cadenas = caso.Split(' ');

                    if(int.Parse(cadenas[0]) < 1 || int.Parse(cadenas[0]) > 20)
                    {
                        validacion = false;
                        //Console.WriteLine("El numero de multitomas debe estar entre 1 y 10.");
                    }
                    else
                    {
                        validacion = true;
                        foreach(var cadena in cadenas)
                        {
                            if(int.Parse(cadena) < 2 || int.Parse(cadena) > 10)
                            {
                                validacion = false;
                            }
                        }
                        if(!validacion)
                        {
                            //Console.WriteLine("El numero de tomas del multitoma debe estar entre 2 y 10.");
                        }
                    }
                    if(validacion)
                    {
                        foreach(var cadena in cadenas)
                        {
                            ingresos.Add(int.Parse(cadena));
                        }
                    }
                }
                while(!validacion);
                
                int[] numeros = ingresos.ToArray();                
                ingresos.Clear();
                var resultado = 1;

                for (int j = 0; j <= numeros[0]; j++)
                {
                    if (j == 0)
                    {
                        resultado = resultado - numeros[j];
                    }
                    if (j > 0)
                    {
                        resultado = resultado + numeros[j];
                    }
                }
                lista.Add(resultado);
                i++;
            }

            int[] resultados = lista.ToArray();

            foreach (var resultado in resultados)
            {
                Console.WriteLine(resultado);
            }
        }
    }
}