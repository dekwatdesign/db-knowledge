# `hsk_evaluation_bprs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(5) | NO | PRI | 0 |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| an | varchar(10) | YES | MUL | NULL |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| b1 | int(1) | YES |  | NULL |  |  |
| b2 | int(1) | YES |  | NULL |  |  |
| b3 | int(1) | YES |  | NULL |  |  |
| b4 | int(1) | YES |  | NULL |  |  |
| b5 | int(1) | YES |  | NULL |  |  |
| b6 | int(1) | YES |  | NULL |  |  |
| b7 | int(1) | YES |  | NULL |  |  |
| b8 | int(1) | YES |  | NULL |  |  |
| b9 | int(1) | YES |  | NULL |  |  |
| b10 | int(1) | YES |  | NULL |  |  |
| b11 | int(1) | YES |  | NULL |  |  |
| b12 | int(1) | YES |  | NULL |  |  |
| b13 | int(1) | YES |  | NULL |  |  |
| b14 | int(1) | YES |  | NULL |  |  |
| b15 | int(1) | YES |  | NULL |  |  |
| b16 | int(1) | YES |  | NULL |  |  |
| b17 | int(1) | YES |  | NULL |  |  |
| b18 | int(1) | YES |  | NULL |  |  |
| sumB | int(2) | YES |  | NULL |  |  |
| sum_type | int(1) | YES |  | NULL |  |  |
| spell_id | int(1) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | id | yes | 1 |
| vstdate | vstdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 246389,
    "vstdate": "2024-08-27",
    "vsttime": "11:46:59",
    "an": "670001142",
    "hn": "660001252",
    "staff": "[MASKED_FULLNAME]",
    "b1": 2,
    "b2": 2,
    "b3": 2,
    "b4": 2,
    "b5": 2,
    "b6": 2,
    "b7": 2,
    "b8": 2,
    "b9": 2,
    "b10": 2,
    "b11": 2,
    "b12": 2,
    "b13": 2,
    "b14": 2,
    "b15": 2,
    "b16": 2,
    "b17": 2,
    "b18": 2,
    "sumB": 36,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2024-08-27 11:46:59"
  },
  {
    "id": 246390,
    "vstdate": "2024-09-04",
    "vsttime": "10:30:34",
    "an": "670001334",
    "hn": "660001242",
    "staff": "[MASKED_FULLNAME]",
    "b1": 1,
    "b2": 2,
    "b3": 2,
    "b4": 2,
    "b5": 2,
    "b6": 2,
    "b7": 2,
    "b8": 2,
    "b9": 2,
    "b10": 2,
    "b11": 2,
    "b12": 2,
    "b13": 2,
    "b14": 2,
    "b15": 2,
    "b16": 2,
    "b17": 2,
    "b18": 2,
    "sumB": 35,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2024-09-04 10:30:34"
  },
  {
    "id": 246391,
    "vstdate": "2024-09-04",
    "vsttime": "10:30:42",
    "an": "670001334",
    "hn": "660001242",
    "staff": "[MASKED_FULLNAME]",
    "b1": 1,
    "b2": 2,
    "b3": 2,
    "b4": 2,
    "b5": 2,
    "b6": 2,
    "b7": 2,
    "b8": 2,
    "b9": 2,
    "b10": 2,
    "b11": 2,
    "b12": 2,
    "b13": 1,
    "b14": 1,
    "b15": 1,
    "b16": 1,
    "b17": 1,
    "b18": 1,
    "sumB": 29,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2024-09-04 10:30:42"
  },
  {
    "id": 246392,
    "vstdate": "2024-09-04",
    "vsttime": "13:59:16",
    "an": "670001419",
    "hn": "650005914",
    "staff": "[MASKED_FULLNAME]",
    "b1": 2,
    "b2": 4,
    "b3": 4,
    "b4": 4,
    "b5": 4,
    "b6": 4,
    "b7": 4,
    "b8": 3,
    "b9": 3,
    "b10": 3,
    "b11": 3,
    "b12": 4,
    "b13": 4,
    "b14": 4,
    "b15": 4,
    "b16": 4,
    "b17": 4,
    "b18": 4,
    "sumB": 66,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2024-09-04 13:59:16"
  },
  {
    "id": 246393,
    "vstdate": "2024-09-04",
    "vsttime": "13:59:26",
    "an": "670001419",
    "hn": "650005914",
    "staff": "[MASKED_FULLNAME]",
    "b1": 2,
    "b2": 4,
    "b3": 4,
    "b4": 4,
    "b5": 4,
    "b6": 4,
    "b7": 4,
    "b8": 3,
    "b9": 3,
    "b10": 3,
    "b11": 3,
    "b12": 4,
    "b13": 4,
    "b14": 4,
    "b15": 4,
    "b16": 2,
    "b17": 3,
    "b18": 5,
    "sumB": 64,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2024-09-04 13:59:26"
  },
  {
    "id": 246394,
    "vstdate": "2024-09-05",
    "vsttime": "10:07:00",
    "an": "670001257",
    "hn": "660001255",
    "staff": "[MASKED_FULLNAME]",
    "b1": 2,
    "b2": 2,
    "b3": 2,
    "b4": 3,
    "b5": 3,
    "b6": 3,
    "b7": 3,
    "b8": 3,
    "b9": 3,
    "b10": 4,
    "b11": 4,
    "b12": 4,
    "b13": 4,
    "b14": 4,
    "b15": 4,
    "b16": 4,
    "b17": 4,
    "b18": 4,
    "sumB": 60,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2024-09-05 10:07:30"
  },
  {
    "id": 246395,
    "vstdate": "2024-09-05",
    "vsttime": "10:07:17",
    "an": "670001257",
    "hn": "660001255",
    "staff": "[MASKED_FULLNAME]",
    "b1": 2,
    "b2": 2,
    "b3": 2,
    "b4": 3,
    "b5": 3,
    "b6": 3,
    "b7": 3,
    "b8": 3,
    "b9": 3,
    "b10": 4,
    "b11": 4,
    "b12": 4,
    "b13": 4,
    "b14": 4,
    "b15": 4,
    "b16": 4,
    "b17": 4,
    "b18": 4,
    "sumB": 60,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2024-09-05 10:07:17"
  },
  {
    "id": 246396,
    "vstdate": "2025-02-03",
    "vsttime": "12:58:59",
    "an": "680000201",
    "hn": "590000101",
    "staff": "[MASKED_FULLNAME]",
    "b1": 1,
    "b2": 1,
    "b3": 1,
    "b4": 1,
    "b5": 1,
    "b6": 1,
    "b7": 1,
    "b8": 1,
    "b9": 1,
    "b10": 1,
    "b11": 1,
    "b12": 1,
    "b13": 1,
    "b14": 1,
    "b15": 1,
    "b16": 1,
    "b17": 1,
    "b18": 1,
    "sumB": 18,
    "sum_type": null,
    "spell_id": 1,
    "d_update": "2025-02-03 12:58:59"
  }
]
```
