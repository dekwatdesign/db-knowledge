# `thalassaemia_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| thalassaemia_result_id | int(11) | NO | PRI | 0 |  |  |
| thalassaemia_result_name | varchar(150) | YES | UNI | NULL |  |  |
| thalassaemia_result_export | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_thalassaemia_result_name | thalassaemia_result_name | yes | 1 |
| PRIMARY | thalassaemia_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "thalassaemia_result_id": 1,
    "thalassaemia_result_name": "ปกติ",
    "thalassaemia_result_export": "1",
    "hos_guid": null
  },
  {
    "thalassaemia_result_id": 2,
    "thalassaemia_result_name": "ผิดปกติ",
    "thalassaemia_result_export": "2",
    "hos_guid": null
  }
]
```
