import os
import pandas as pd


def create_data_tm_project_file():
    js_file = os.path.join('..', 'js', 'dataTmProjects.js')
    df = pd.read_csv(os.path.join('..', 'tmProjects.csv'))
    df2 = df[['Pays projet', 'N° Projet', 'Date de lancement du projet ', 'Date de fin du projet ',
              'Temps carto (h)', 'Temps valid (h)', 'Stats contributeurs', 'Nb Mapathon', 'Publications', 'Short Name',
              'Bat. Créé', 'Bat. Updaté', 'Bat. Supprimé']]
    df2 = df2[~pd.isnull(df2['Bat. Créé'])]
    df2['N° Projet'] = df2['N° Projet'].astype(int)
    df2 = df2.set_index('N° Projet')
    df2['Date de lancement du projet '] = pd.to_datetime(df2['Date de lancement du projet '])
    df2['Date de lancement du projet '] = df2['Date de lancement du projet '].apply(lambda t: '' if pd.isnull(t) else t.strftime('%Y/%m/%d'))
    df2['Date de fin du projet '] = pd.to_datetime(df2['Date de fin du projet '])
    df2['Date de fin du projet '] = df2['Date de fin du projet '].apply(lambda t: '' if pd.isnull(t) else t.strftime('%Y/%m/%d'))
    df2.to_json(js_file)

    with open(js_file, mode='r') as f:
        lines = f.readlines()

    with open(js_file, mode='w') as f:
        f.write('let tmProjects = ')
        for line in lines:
            f.write(line)


if __name__ == '__main__':
    create_data_tm_project_file()
