# `house_regist_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_regist_type_id | int(11) | NO | PRI | 0 |  |  |
| house_regist_type_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| export_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | house_regist_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "house_regist_type_id": 4,
    "house_regist_type_name": "ที่อาศัยอยู่นอกเขตรับผิดชอบและเข้ามารับบริการ",
    "hos_guid": null,
    "export_code": null
  }
]
```
