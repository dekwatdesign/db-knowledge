# `breast_cancer_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| breast_cancer_check_id | int(11) | NO | PRI | 0 |  |  |
| breast_cancer_check_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_breast_cancer_check_name | breast_cancer_check_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | breast_cancer_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "breast_cancer_check_id": 1,
    "breast_cancer_check_name": "มีน้ำเหลืองหรือเลือดไหลออกจากหัวนม",
    "hos_guid": null
  },
  {
    "breast_cancer_check_id": 2,
    "breast_cancer_check_name": "ขนาดเต้านมแตกต่างกันอย่างผิดปกติ",
    "hos_guid": null
  },
  {
    "breast_cancer_check_id": 3,
    "breast_cancer_check_name": "เต้านม 2 ข้าง ไม่อยู่ในระดับเดียวกัน",
    "hos_guid": null
  },
  {
    "breast_cancer_check_id": 4,
    "breast_cancer_check_name": "หัวนมถูกดึงรั้ง หรือมีสีผิดปกติ",
    "hos_guid": null
  },
  {
    "breast_cancer_check_id": 5,
    "breast_cancer_check_name": "ผิวหนังเต้านมเป็นไตผิดปกติ",
    "hos_guid": null
  }
]
```
