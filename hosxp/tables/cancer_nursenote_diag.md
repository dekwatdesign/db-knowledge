# `cancer_nursenote_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diag_id | int(11) | NO | PRI | 0 |  |  |
| diag_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "diag_id": 1,
    "diag_name": "มีความบกพร่องในการแลกเปลี่ยนก็าซ เนื่องจากมีพยาธิสภาพของปอด",
    "hos_guid": null
  },
  {
    "diag_id": 2,
    "diag_name": "มีโอกาสเกิดภาวะไม่สมดุลของน้ำและอีเล็คโตรถัท์",
    "hos_guid": null
  },
  {
    "diag_id": 3,
    "diag_name": "มีโอกาสเกิดภาวะชักหรือมีโอกาสเกิดอันตรายจากภาวะชัก",
    "hos_guid": null
  },
  {
    "diag_id": 4,
    "diag_name": "มีโอกาสเกิดภาวะแทรกซ้อนจากการฉายรังสี",
    "hos_guid": null
  },
  {
    "diag_id": 5,
    "diag_name": "มีโอกาสเกิดภาวะแทรกซ้อนจากเคมีบำบัด",
    "hos_guid": null
  },
  {
    "diag_id": 6,
    "diag_name": "มีโอกาสเกิดภาวะแทรกซ้อนจากความดันดลหิตสูง",
    "hos_guid": null
  }
]
```
