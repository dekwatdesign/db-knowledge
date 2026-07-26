# `copd_mrc_dyspnea_scale_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| copd_mrc_dyspnea_scale_type_id | int(11) | NO | PRI | 0 |  |  |
| copd_mrc_dyspnea_scale_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_copd_mrc_dyspnea_scale_type_name | copd_mrc_dyspnea_scale_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | copd_mrc_dyspnea_scale_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "copd_mrc_dyspnea_scale_type_id": 1,
    "copd_mrc_dyspnea_scale_type_name": "Grade 0 ไม่มีอาการหอบเหนื่อย ยกเว้นไปออกกำลังอย่างหนัก",
    "hos_guid": null
  },
  {
    "copd_mrc_dyspnea_scale_type_id": 2,
    "copd_mrc_dyspnea_scale_type_name": "Grade 1 มีอาการเหนื่อยเมื่อเดินเร็วๆ บนทางราบ หรือ เดินขึ้นเขา",
    "hos_guid": null
  },
  {
    "copd_mrc_dyspnea_scale_type_id": 3,
    "copd_mrc_dyspnea_scale_type_name": "Grade 2 ต้องเดินบนทางราบได้ช้ากว่าคนปกติที่มีอายุขนาดเดียวกัน เพื่อหลีกเลี่ยงเกิดอาการหอบเหนื่อย หรือต้องหยุดพักเพื่อหายใจเมื่อเดินบนทางราบได้ระยะหนึ่ง",
    "hos_guid": null
  },
  {
    "copd_mrc_dyspnea_scale_type_id": 4,
    "copd_mrc_dyspnea_scale_type_name": "Grade 3 ต้องหยุดพักหายใจเพราะเหนื่อยเมื่อเดินได้ประมาณ 100 หลา หรือในราว 2-3 นาที",
    "hos_guid": null
  },
  {
    "copd_mrc_dyspnea_scale_type_id": 5,
    "copd_mrc_dyspnea_scale_type_name": "Grade 4 มีอาการเหนื่อยเมื่อต้องออกจากบ้าน หรือเหนื่อยเมื่อสวมหรือถอดเสื้อผ้าออกเอง",
    "hos_guid": null
  },
  {
    "copd_mrc_dyspnea_scale_type_id": 9,
    "copd_mrc_dyspnea_scale_type_name": "ไม่ได้ประเมิน",
    "hos_guid": null
  }
]
```
