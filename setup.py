from distutils.core import setup

setup(
    name='digitial-library',
    version='1.0',
    installations = [
        'Eve == 0.7.2',
        'Flask - Mail == 0.9.1',
        'gunicorn == 19.7.1',
        'Flask - Cors == 3.0.2',
        'PyJWT == 1.4.2'
    ]
)