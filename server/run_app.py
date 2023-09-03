from app import create_app
import argparse


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--dev', action="store", required=False, type=bool)
    args = parser.parse_args()
    # TODO:redo env variable parse
    if args.dev == True:
        create_app().run(debug=True, host='0.0.0.0')
    else:
        create_app().run(debug=True, host='0.0.0.0')