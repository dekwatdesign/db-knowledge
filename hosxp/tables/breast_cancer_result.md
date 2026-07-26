# `breast_cancer_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| breast_cancer_result_id | int(11) | NO | PRI | 0 |  |  |
| breast_cancer_result_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_breast_cancer_result_name | breast_cancer_result_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | breast_cancer_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "breast_cancer_result_id": 1,
    "breast_cancer_result_name": "ปกติ",
    "hos_guid": null
  },
  {
    "breast_cancer_result_id": 2,
    "breast_cancer_result_name": "พบผิดปกติ",
    "hos_guid": null
  },
  {
    "breast_cancer_result_id": 3,
    "breast_cancer_result_name": "พบเซลมะเร็ง",
    "hos_guid": null
  },
  {
    "breast_cancer_result_id": 4,
    "breast_cancer_result_name": "ผิดปกติแต่ไม่ใช่เซลมะเร็ง",
    "hos_guid": null
  }
]
```
