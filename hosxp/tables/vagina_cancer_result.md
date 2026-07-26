# `vagina_cancer_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vagina_cancer_result_id | int(11) | NO | PRI | 0 |  |  |
| vagina_cancer_result_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vagina_cancer_result_name | vagina_cancer_result_name | yes | 1 |
| PRIMARY | vagina_cancer_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "vagina_cancer_result_id": 1,
    "vagina_cancer_result_name": "ปกติ",
    "hos_guid": null
  },
  {
    "vagina_cancer_result_id": 2,
    "vagina_cancer_result_name": "ผิดปกติ Cat II",
    "hos_guid": null
  },
  {
    "vagina_cancer_result_id": 3,
    "vagina_cancer_result_name": "ผิดปกติ Cat III หรือ IV",
    "hos_guid": null
  },
  {
    "vagina_cancer_result_id": 4,
    "vagina_cancer_result_name": "ผิดปกติแต่ไม่ใช่เซลมะเร็ง",
    "hos_guid": null
  }
]
```
