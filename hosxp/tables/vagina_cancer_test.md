# `vagina_cancer_test`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vagina_cancer_test_id | int(11) | NO | PRI | 0 |  |  |
| vagina_cancer_test_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vagina_cancer_test_name | vagina_cancer_test_name | yes | 1 |
| PRIMARY | vagina_cancer_test_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "vagina_cancer_test_id": 1,
    "vagina_cancer_test_name": "Pap smear",
    "hos_guid": null
  },
  {
    "vagina_cancer_test_id": 2,
    "vagina_cancer_test_name": "VIA",
    "hos_guid": null
  }
]
```
