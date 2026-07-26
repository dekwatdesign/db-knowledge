# `ipd_pdf_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_pdf_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_pdf_type_name | varchar(200) | YES | UNI | NULL |  |  |
| group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_pdf_type_name | ipd_pdf_type_name | yes | 1 |
| PRIMARY | ipd_pdf_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_pdf_type_id": 1,
    "ipd_pdf_type_name": "Discharge summary",
    "group_id": 1
  },
  {
    "ipd_pdf_type_id": 2,
    "ipd_pdf_type_name": "Informed consent",
    "group_id": 2
  },
  {
    "ipd_pdf_type_id": 3,
    "ipd_pdf_type_name": "Referring Letter Sheet",
    "group_id": 2
  },
  {
    "ipd_pdf_type_id": 4,
    "ipd_pdf_type_name": "History/Physical Examination",
    "group_id": 3
  },
  {
    "ipd_pdf_type_id": 5,
    "ipd_pdf_type_name": "Progress Note",
    "group_id": 4
  },
  {
    "ipd_pdf_type_id": 6,
    "ipd_pdf_type_name": "Physicians Orders",
    "group_id": 4
  },
  {
    "ipd_pdf_type_id": 7,
    "ipd_pdf_type_name": "Consult Report",
    "group_id": 4
  },
  {
    "ipd_pdf_type_id": 8,
    "ipd_pdf_type_name": "Operative Report",
    "group_id": 5
  }
]
```
