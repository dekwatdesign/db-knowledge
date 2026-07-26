# `teenage_preg_serious_test_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_serious_test_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_serious_test_evaluate_name | varchar(250) | YES |  | NULL |  |  |
| teenage_preg_serious_test_evaluate_min_score | int(11) | YES |  | NULL |  |  |
| teenage_preg_serious_test_evaluate_max_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_serious_test_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "teenage_preg_serious_test_evaluate_id": 1,
    "teenage_preg_serious_test_evaluate_name": "เครียดน้อยกว่าปกติ",
    "teenage_preg_serious_test_evaluate_min_score": 0,
    "teenage_preg_serious_test_evaluate_max_score": 5,
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_evaluate_id": 2,
    "teenage_preg_serious_test_evaluate_name": "เครียดระดับปกติ",
    "teenage_preg_serious_test_evaluate_min_score": 6,
    "teenage_preg_serious_test_evaluate_max_score": 17,
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_evaluate_id": 3,
    "teenage_preg_serious_test_evaluate_name": "เครียดสูงกว่าปกติเล็กน้อย",
    "teenage_preg_serious_test_evaluate_min_score": 18,
    "teenage_preg_serious_test_evaluate_max_score": 25,
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_evaluate_id": 4,
    "teenage_preg_serious_test_evaluate_name": "เครียดสูงกว่าปกติปานกลาง",
    "teenage_preg_serious_test_evaluate_min_score": 26,
    "teenage_preg_serious_test_evaluate_max_score": 29,
    "hos_guid": null
  },
  {
    "teenage_preg_serious_test_evaluate_id": 5,
    "teenage_preg_serious_test_evaluate_name": "เครียดสูงกว่าปกติมาก",
    "teenage_preg_serious_test_evaluate_min_score": 30,
    "teenage_preg_serious_test_evaluate_max_score": 60,
    "hos_guid": null
  }
]
```
