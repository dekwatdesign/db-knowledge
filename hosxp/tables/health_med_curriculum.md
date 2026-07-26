# `health_med_curriculum`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_curriculum_id | int(11) | NO | PRI | 0 |  |  |
| health_med_curriculum_name | varchar(250) | YES | UNI | NULL |  |  |
| health_med_curriculum_code | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_curriculum_name | health_med_curriculum_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_curriculum_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_curriculum_id": 1,
    "health_med_curriculum_name": "ผู้ประกอบวิชาชีพเวชกรรม(แพทย์แผนปัจจุบัน)",
    "health_med_curriculum_code": "A01",
    "hos_guid": null
  },
  {
    "health_med_curriculum_id": 2,
    "health_med_curriculum_name": "หลักสูตรการแพทย์แผนไทย สาขาเวชกรรมแผนไทย",
    "health_med_curriculum_code": "A06",
    "hos_guid": null
  },
  {
    "health_med_curriculum_id": 3,
    "health_med_curriculum_name": "ผู้ประกอบโรคศิลปะ สาขาการแพทย์แผนไทยประยุกต์",
    "health_med_curriculum_code": "A02",
    "hos_guid": null
  },
  {
    "health_med_curriculum_id": 4,
    "health_med_curriculum_name": "ผู้ประกอบโรคศิลปะ สาขาการแพทย์แผนไทย ประเภทเวชกรรมไทย",
    "health_med_curriculum_code": "A03",
    "hos_guid": null
  },
  {
    "health_med_curriculum_id": 5,
    "health_med_curriculum_name": "ผู้ประกอบโรคศิลปะ สาขาการแพทย์แผนไทย ประเภทผดุงครรภ์ไทย",
    "health_med_curriculum_code": "A04",
    "hos_guid": null
  },
  {
    "health_med_curriculum_id": 6,
    "health_med_curriculum_name": "ผู้ประกอบโรคศิลปะ สาขาการแพทย์แผนไทย ประเภทนวดไทย",
    "health_med_curriculum_code": "A05",
    "hos_guid": null
  },
  {
    "health_med_curriculum_id": 7,
    "health_med_curriculum_name": "หลักสูตรครูฝึกการแพทย์แผนไทย",
    "health_med_curriculum_code": "A07",
    "hos_guid": null
  },
  {
    "health_med_curriculum_id": 8,
    "health_med_curriculum_name": "หลักสูตรการนวดไทย 800   ชั่วโมง",
    "health_med_curriculum_code": "A08",
    "hos_guid": null
  }
]
```
