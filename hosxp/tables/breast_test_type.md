# `breast_test_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| breast_test_type_id | int(11) | NO | PRI | 0 |  |  |
| breast_test_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_breast_test_type_name | breast_test_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | breast_test_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "breast_test_type_id": 1,
    "breast_test_type_name": "โดยเจ้าหน้าที่",
    "hos_guid": null
  },
  {
    "breast_test_type_id": 2,
    "breast_test_type_name": "ตรวจด้วยตนเอง",
    "hos_guid": null
  }
]
```
