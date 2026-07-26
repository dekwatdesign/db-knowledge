# `asthma_bronchodilator_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| asthma_bronchodilator_type_id | int(11) | NO | PRI | 0 |  |  |
| asthma_bronchodilator_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| nhso_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_asthma_bronchodilator_type_name | asthma_bronchodilator_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | asthma_bronchodilator_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "asthma_bronchodilator_type_id": 1,
    "asthma_bronchodilator_type_name": "ยาขยายหลอดลมชนิดออกฤทธิ์สั้น (SABA)",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "asthma_bronchodilator_type_id": 2,
    "asthma_bronchodilator_type_name": "ยาขยายหลอดลมชนิดออกฤทธิ์ยาว (LABA)",
    "hos_guid": null,
    "nhso_code": null
  },
  {
    "asthma_bronchodilator_type_id": 3,
    "asthma_bronchodilator_type_name": "ยาสเตียรอยด์ (ICS)",
    "hos_guid": null,
    "nhso_code": null
  }
]
```
