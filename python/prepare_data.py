import os
import pandas as pd


def create_data_tm_project_file():
    js_file = os.path.join('..', 'js', 'dataTmProjects.js')
    df = pd.read_csv(os.path.join('..', 'tmProjects.csv'))
    df2 = df[['Pays projet', 'N° Projet', 'Date de lancement du projet ', 'Date de fin du projet ',
              'Bat. Créé', 'Bat. Updaté', 'Bat. Supprimé']]
    df2 = df2[~pd.isnull(df2['Bat. Créé'])]
    df2 = df2.set_index('N° Projet')
    df2.to_json(js_file)

    with open(js_file, mode='r') as f:
        lines = f.readlines()

    with open(js_file, mode='w') as f:
        f.write('let tmProjects = ')
        for line in lines:
            f.write(line)


if __name__ == '__main__':
    create_data_tm_project_file()
