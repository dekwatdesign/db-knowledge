# `income_rvsp_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvsp_group | varchar(10) | NO | PRI |  |  |  |
| rvsp_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_rvsp_name | rvsp_name | yes | 1 |
| PRIMARY | rvsp_group | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rvsp_group": "1",
    "rvsp_name": "ค่าห้องและค่าอาหาร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvsp_group": "10",
    "rvsp_name": "ค่าตรวจวินิจฉัยโดยวิธีพิเศษอื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvsp_group": "11",
    "rvsp_name": "ค่าอุปกรณ์ของใช้และเครื่องมือทางการแพทย์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvsp_group": "12",
    "rvsp_name": "ค่าผ่าตัด ทำคลอด และการทำหัตถการ และวิสัญญี",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvsp_group": "13",
    "rvsp_name": "ค่าบริการทางทันตกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvsp_group": "14",
    "rvsp_name": "ค่าบริการทางกายภาพบำบัด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvsp_group": "15",
    "rvsp_name": "ค่าบริการทางการแพทย์และพยาบาล",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "rvsp_group": "16",
    "rvsp_name": "ค่าบริการฝังเข็ม และค่าบริการการให้การบำบัดของผู้ประกอบโรคศิลปะอื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
