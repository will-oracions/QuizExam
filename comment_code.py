import os
import sys


def commenter_fichiers_tsx(dossier):
    # Parcours récursif des fichiers dans le dossier et ses sous-dossiers
    for dossier_racine, _, fichiers in os.walk(dossier):
        for nom_fichier in fichiers:
            if nom_fichier.endswith('.tsx'):
                chemin_fichier = os.path.join(dossier_racine, nom_fichier)
                print(f"Commenting {chemin_fichier}...")

                # Lire le contenu du fichier ligne par ligne
                with open(chemin_fichier, 'r') as fichier:
                    lignes = fichier.readlines()

                # Ajouter des commentaires à chaque ligne
                lignes_commentees = []
                for ligne in lignes:
                    lignes_commentees.append(f'// {ligne}')

                # Écrire le contenu commenté dans le fichier
                with open(chemin_fichier, 'w') as fichier:
                    fichier.writelines(lignes_commentees)

    print("Terminé ! Tous les fichiers .tsx ont été commentés.")


# Vérification si le script est appelé avec un argument de dossier
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Utilisation : python script.py chemin_dossier")
    else:
        dossier_a_commenter = sys.argv[1]
        commenter_fichiers_tsx(dossier_a_commenter)
