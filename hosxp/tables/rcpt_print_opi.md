# `rcpt_print_opi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_opi_id | int(11) | NO | PRI | 0 |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rcpt_print_opi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rcpt_print_opi_id": 1,
    "finance_number": "0225019",
    "opi_guid": "{9C6995EA-B108-4F32-A856-3C7235690D60}",
    "hos_guid": null
  },
  {
    "rcpt_print_opi_id": 2,
    "finance_number": "0225020",
    "opi_guid": "{CD4DD29B-57FA-4042-B0D9-102C223A26FB}",
    "hos_guid": null
  },
  {
    "rcpt_print_opi_id": 3,
    "finance_number": "0225020",
    "opi_guid": "{BAB874F7-74AD-425C-8CFB-5E14AEFFCD09}",
    "hos_guid": null
  },
  {
    "rcpt_print_opi_id": 4,
    "finance_number": "0225021",
    "opi_guid": "{C2CA3463-6BE4-4B8E-9143-933904ED8CAF}",
    "hos_guid": null
  },
  {
    "rcpt_print_opi_id": 5,
    "finance_number": "0225021",
    "opi_guid": "{8F2794BF-E632-475C-8998-46419F68CF50}",
    "hos_guid": null
  },
  {
    "rcpt_print_opi_id": 6,
    "finance_number": "0225022",
    "opi_guid": "{66D01D2B-5EF6-4343-B1EF-E0867B56A0CE}",
    "hos_guid": null
  },
  {
    "rcpt_print_opi_id": 7,
    "finance_number": "0225022",
    "opi_guid": "{608AABDA-7C42-4DF2-BF1E-C5D531EFA4F8}",
    "hos_guid": null
  },
  {
    "rcpt_print_opi_id": 8,
    "finance_number": "0225023",
    "opi_guid": "{0C724F27-A382-4806-8C7B-8BDD7A54250E}",
    "hos_guid": null
  }
]
```
