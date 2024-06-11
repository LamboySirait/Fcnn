# check_imports.py



try:
    from test_frcnn import nn_base
    print("nn_base imported successfully.")
except ImportError as e:
    print(f"Error importing nn_base: {e}")

try:
    from test_frcnn import rpn_layer
    print("rpn_layer imported successfully.")
except ImportError as e:
    print(f"Error importing rpn_layer: {e}")

try:
    from test_frcnn import classifier_layer
    print("classifier_layer imported successfully.")
except ImportError as e:
    print(f"Error importing classifier_layer: {e}")

try:
    from test_frcnn import rpn_to_roi
    print("rpn_to_roi imported successfully.")
except ImportError as e:
    print(f"Error importing rpn_to_roi: {e}")

try:
    from test_frcnn import format_img
    print("format_img imported successfully.")
except ImportError as e:
    print(f"Error importing format_img: {e}")

try:
    from test_frcnn import get_real_coordinates
    print("get_real_coordinates imported successfully.")
except ImportError as e:
    print(f"Error importing get_real_coordinates: {e}")

try:
    from test_frcnn import non_max_suppression_fast
    print("non_max_suppression_fast imported successfully.")
except ImportError as e:
    print(f"Error importing non_max_suppression_fast: {e}")

try:
    from test_frcnn import apply_regr
    print("apply_regr imported successfully.")
except ImportError as e:
    print(f"Error importing apply_regr: {e}")

try:
    from test_frcnn import histogram_equalization
    print("histogram_equalization imported successfully.")
except ImportError as e:
    print(f"Error importing histogram_equalization: {e}")
