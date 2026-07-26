# `hsk_evaluation_patienttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(5) | NO | PRI | 0 |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| t1_1 | int(1) | YES |  | NULL |  |  |
| t1_2 | int(1) | YES |  | NULL |  |  |
| t1_3 | int(1) | YES |  | NULL |  |  |
| t1_4 | int(1) | YES |  | NULL |  |  |
| t1_5 | int(1) | YES |  | NULL |  |  |
| t1_6 | int(1) | YES |  | NULL |  |  |
| t1_7 | int(1) | YES |  | NULL |  |  |
| scor_t1 | int(2) | YES |  | NULL |  |  |
| t2_1 | int(1) | YES |  | NULL |  |  |
| t2_2 | int(1) | YES |  | NULL |  |  |
| t2_3 | int(1) | YES |  | NULL |  |  |
| t2_4 | int(1) | YES |  | NULL |  |  |
| t2_5 | int(1) | YES |  | NULL |  |  |
| scor_t2 | int(2) | YES |  | NULL |  |  |
| scor_type | varchar(3) | YES | MUL | NULL |  |  |
| spell_id | int(1) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| scor_type | scor_type | no | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 526030,
    "vstdate": "2024-08-27",
    "vsttime": "11:46:25",
    "an": "670001142",
    "hn": "660001252",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 1,
    "t1_4": 1,
    "t1_5": 1,
    "t1_6": 1,
    "t1_7": 1,
    "scor_t1": 1,
    "t2_1": 1,
    "t2_2": 1,
    "t2_3": 1,
    "t2_4": 1,
    "t2_5": 1,
    "scor_t2": 5,
    "scor_type": "1d",
    "spell_id": 1,
    "d_update": "2024-08-27 11:46:25"
  },
  {
    "id": 526031,
    "vstdate": "2024-08-30",
    "vsttime": "14:56:34",
    "an": "670001503",
    "hn": "670001082",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 0,
    "t1_4": 2,
    "t1_5": 0,
    "t1_6": 0,
    "t1_7": 0,
    "scor_t1": 2,
    "t2_1": 2,
    "t2_2": 2,
    "t2_3": 2,
    "t2_4": 3,
    "t2_5": 2,
    "scor_t2": 11,
    "scor_type": "2b",
    "spell_id": 2,
    "d_update": "2024-08-30 14:56:34"
  },
  {
    "id": 526032,
    "vstdate": "2024-09-04",
    "vsttime": "10:27:08",
    "an": "670001328",
    "hn": "660001191",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 1,
    "t1_4": 1,
    "t1_5": 1,
    "t1_6": 1,
    "t1_7": 1,
    "scor_t1": 1,
    "t2_1": 1,
    "t2_2": 1,
    "t2_3": 1,
    "t2_4": 1,
    "t2_5": 1,
    "scor_t2": 5,
    "scor_type": "1d",
    "spell_id": 1,
    "d_update": "2024-09-04 10:27:08"
  },
  {
    "id": 526033,
    "vstdate": "2024-09-04",
    "vsttime": "10:28:03",
    "an": "670001328",
    "hn": "660001191",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 1,
    "t1_4": 0,
    "t1_5": 1,
    "t1_6": 1,
    "t1_7": 1,
    "scor_t1": 1,
    "t2_1": 1,
    "t2_2": 1,
    "t2_3": 1,
    "t2_4": 1,
    "t2_5": 1,
    "scor_t2": 5,
    "scor_type": "1d",
    "spell_id": 1,
    "d_update": "2024-09-04 10:28:03"
  },
  {
    "id": 526034,
    "vstdate": "2024-09-04",
    "vsttime": "10:28:22",
    "an": "670001328",
    "hn": "660001191",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 1,
    "t1_4": 4,
    "t1_5": 1,
    "t1_6": 1,
    "t1_7": 1,
    "scor_t1": 4,
    "t2_1": 1,
    "t2_2": 1,
    "t2_3": 1,
    "t2_4": 1,
    "t2_5": 1,
    "scor_t2": 5,
    "scor_type": "4d",
    "spell_id": 1,
    "d_update": "2024-09-04 10:28:22"
  },
  {
    "id": 526035,
    "vstdate": "2024-09-04",
    "vsttime": "10:29:38",
    "an": "670001334",
    "hn": "660001242",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 1,
    "t1_4": 1,
    "t1_5": 1,
    "t1_6": 1,
    "t1_7": 1,
    "scor_t1": 1,
    "t2_1": 1,
    "t2_2": 1,
    "t2_3": 1,
    "t2_4": 1,
    "t2_5": 1,
    "scor_t2": 5,
    "scor_type": "1d",
    "spell_id": 1,
    "d_update": "2024-09-04 10:29:38"
  },
  {
    "id": 526036,
    "vstdate": "2024-09-04",
    "vsttime": "13:57:10",
    "an": "670001419",
    "hn": "650005914",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 1,
    "t1_4": 1,
    "t1_5": 1,
    "t1_6": 1,
    "t1_7": 1,
    "scor_t1": 1,
    "t2_1": 1,
    "t2_2": 1,
    "t2_3": 1,
    "t2_4": 4,
    "t2_5": 4,
    "scor_t2": 11,
    "scor_type": "1b",
    "spell_id": 1,
    "d_update": "2024-09-04 13:57:10"
  },
  {
    "id": 526039,
    "vstdate": "2024-09-05",
    "vsttime": "10:04:33",
    "an": "670001392",
    "hn": "660001419",
    "staff": "[MASKED_FULLNAME]",
    "t1_1": 1,
    "t1_2": 1,
    "t1_3": 1,
    "t1_4": 1,
    "t1_5": 1,
    "t1_6": 1,
    "t1_7": 1,
    "scor_t1": 1,
    "t2_1": 2,
    "t2_2": 2,
    "t2_3": 2,
    "t2_4": 2,
    "t2_5": 2,
    "scor_t2": 10,
    "scor_type": "1c",
    "spell_id": 1,
    "d_update": "2024-09-05 10:04:33"
  }
]
```
