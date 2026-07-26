# `operation_anes_physical_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_physical_status_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_physical_status_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_anes_physical_status_name | operation_anes_physical_status_name | yes | 1 |
| PRIMARY | operation_anes_physical_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "operation_anes_physical_status_id": 1,
    "operation_anes_physical_status_name": "1 - สุขภาพแข็งแรงดี",
    "hos_guid": "{3ADDD2AE-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_anes_physical_status_id": 2,
    "operation_anes_physical_status_name": "2 - มีพยาธิสภาพของร่างกายเล็กน้อย",
    "hos_guid": "{3ADDD57E-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_anes_physical_status_id": 3,
    "operation_anes_physical_status_name": "3 - มีพยาธิสภาพของร่างกายรุนแรง",
    "hos_guid": "{3ADDD682-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_anes_physical_status_id": 4,
    "operation_anes_physical_status_name": "4 - มีพยาธิสภาพของร่างกายรุนแรงมาก",
    "hos_guid": "{3ADDD79A-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_anes_physical_status_id": 5,
    "operation_anes_physical_status_name": "5 - มีอาการเพียบหนัก",
    "hos_guid": "{3ADDD88A-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_anes_physical_status_id": 6,
    "operation_anes_physical_status_name": "1E - สุขภาพแข็งแรงดี",
    "hos_guid": "{3ADDD97A-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_anes_physical_status_id": 7,
    "operation_anes_physical_status_name": "2E - มีพยาธิสภาพของร่างกายเล็กน้อย",
    "hos_guid": "{3ADDDA6A-F61C-11DE-BFF4-00215E472B30}"
  },
  {
    "operation_anes_physical_status_id": 8,
    "operation_anes_physical_status_name": "3E - มีพยาธิสภาพของร่างกายรุนแรง",
    "hos_guid": "{3ADDDB50-F61C-11DE-BFF4-00215E472B30}"
  }
]
```
