import os
import shutil
import argparse


def rename_files_and_folders(directory, source_rename, destination_rename):
    for root, dirs, files in os.walk(directory, topdown=False):
        for name in files + dirs:
            original_path = os.path.join(root, name)
            new_name = name.replace(source_rename, destination_rename).replace(
                source_rename.capitalize(), destination_rename.capitalize())
            new_path = os.path.join(root, new_name)
            os.rename(original_path, new_path)
            # print(f"Renommage de '{original_path}' en '{new_path}'")


def replace_strings_in_files(directory, source_string, destination_string):
    for root, dirs, files in os.walk(directory):
        for file_name in files:
            file_path = os.path.join(root, file_name)
            with open(file_path, 'r') as file:
                file_content = file.read()
            file_content = file_content.replace(source_string, destination_string).replace(
                source_string.capitalize(), destination_string.capitalize())
            with open(file_path, 'w') as file:
                file.write(file_content)
                # print(f"Modifications apportées à '{file_path}'")


def generate_module(source_module, destination_module, source_rename, destination_rename):
    # Chemin absolu du répertoire courant
    current_directory = os.getcwd()

    # Chemin absolu des dossiers source et de destination
    source_path = os.path.abspath(
        os.path.join(current_directory, source_module))
    destination_path = os.path.abspath(
        os.path.join(current_directory, destination_module))

    # Vérification de l'existence du dossier source
    if not os.path.exists(source_path):
        print(f"Le dossier source '{source_path}' n'existe pas.")
        return

    # Vérification de l'existence du dossier de destination
    if os.path.exists(destination_path):
        print(f"Le dossier de destination '{destination_path}' existe déjà.")
        return

    # Création du dossier de destination
    try:
        shutil.copytree(source_path, destination_path)
        # print(
        #     f"Le module '{source_path}' a été copié avec succès dans '{destination_path}'.")

        # Renommer les fichiers et dossiers dans le dossier de destination
        rename_files_and_folders(
            destination_path, source_rename, destination_rename)

        # Remplacer les chaînes dans les fichiers du dossier de destination
        replace_strings_in_files(
            destination_path, source_rename, destination_rename)

    except shutil.Error as e:
        print(
            f"Erreur lors de la copie du module '{source_path}' vers '{destination_path}': {e}")
    except OSError as e:
        print(f"Erreur: {e}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='Script pour copier le contenu d\'un dossier source dans un dossier destination et renommer les fichiers et dossiers ainsi que les expressions.')
    parser.add_argument('source', type=str,
                        help='Nom du dossier source à copier')
    parser.add_argument('destination', type=str,
                        help='Nom du dossier de destination')
    parser.add_argument('-r', '--source_rename', type=str,
                        help='Nom du dossier source à renommer')
    parser.add_argument('-d', '--destination_rename', type=str,
                        help='Nom du dossier de destination renommé')

    args = parser.parse_args()

    generate_module(args.source, args.destination,
                    args.source_rename, args.destination_rename)
