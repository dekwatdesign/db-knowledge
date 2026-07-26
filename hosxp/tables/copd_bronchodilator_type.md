# `copd_bronchodilator_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| copd_bronchodilator_type_id | int(11) | NO | PRI | 0 |  |  |
| copd_bronchodilator_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_copd_bronchodilator_type_name | copd_bronchodilator_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | copd_bronchodilator_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "copd_bronchodilator_type_id": 1,
    "copd_bronchodilator_type_name": "ยาขยายหลอดลมชนิดออกฤทธิ์สั้น (SABA)",
    "hos_guid": null
  },
  {
    "copd_bronchodilator_type_id": 2,
    "copd_bronchodilator_type_name": "ยาขยายหลอดลมชนิดออกฤทธิ์ยาว (LABA)",
    "hos_guid": null
  },
  {
    "copd_bronchodilator_type_id": 3,
    "copd_bronchodilator_type_name": "ยาสเตียรอยด์ (ICS)",
    "hos_guid": null
  }
]
```
