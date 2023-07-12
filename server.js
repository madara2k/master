const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');

app.use(cors());

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

app.get('/api/v1/gc/builderdata', (req, res) => {
  res.status(200).send(builderData);
});

// app.get('/api/v1/gc/feature*', (req, res) => {
//   res.sendStatus(200);
// });

app.get('/api/v1/gc/functions*', (req, res) => {
  res.sendStatus(200);
});

app.get('/api/v1/gc/blocks*', (req, res) => {
  res.sendStatus(200);
});
let builderData = {
  connectors: [
    {
      toId: '344000000292533',
      fromId: '344000000292539'
    },
    {
      toId: '344000000292551',
      fromId: '344000000292533'
    },
    {
      toId: '344000000292541',
      fromId: '344000000787755'
    },
    {
      toId: '344000000787755',
      fromId: '344000000292545'
    },
    {
      toId: '344000000292529',
      fromId: '344000000292531'
    },
    {
      toId: '344000000292539',
      condition: {
        conditionValue: 'Submit a request'
      },
      fromId: '344000000292557'
    },
    {
      toId: '344000000292561',
      condition: {
        conditionValue: 'Zoho People'
      },
      fromId: '344000000292543'
    },
    {
      toId: '344000000292543',
      fromId: '344000000292529'
    },
    {
      toId: '344000000292535',
      fromId: '344000000292551'
    },
    {
      toId: '344000000292547',
      fromId: '344000000292535'
    },
    {
      toId: '344000000292549',
      fromId: '344000000292553'
    },
    {
      toId: '344000000292537',
      fromId: '344000000292559'
    },
    {
      toId: '344000000292527',
      condition: {
        conditionValue: 'Submit a request'
      },
      fromId: '344000000292561'
    },
    {
      toId: '344000000292563',
      condition: {
        conditionValue: 'Submit a request'
      },
      fromId: '344000000292555'
    },
    {
      toId: '344000000292555',
      condition: {
        conditionValue: 'Zoho CRM'
      },
      fromId: '344000000292543'
    },
    {
      toId: '344000000292559',
      fromId: '344000000292547'
    },
    {
      toId: '344000000292557',
      condition: {
        conditionValue: 'Zoho Desk'
      },
      fromId: '344000000292543'
    },
    {
      toId: '344000000292545',
      fromId: '344000000292549'
    },
    {
      toId: '344000000292553',
      fromId: '344000000292537'
    },
    {
      toId: '344000000292531',
      fromId: '344000000292525'
    }
  ],
  variables: [
    {
      schema: 'generic',
      dataType: 'string',
      name: 'global_string',
      description: '1111',
      type: 'global',
      value: 'sridhar'
    },
    {
      schema: 'generic',
      dataType: 'string',
      name: 'departmentId',
      description: '',
      type: 'flow',
      value: '83648000000006907'
    },
    {
      schema: 'generic',
      dataType: 'image',
      name: 'global_image',
      description: '111',
      type: 'global',
      value:
        'https://gc.localzoho.com/api/v1/gc/attachment/85b844980df1fb5a91b1e7c8228ea4de3b2d97cb22ea3bcd6dd7096cffae481d?orgId=61978514'
    },
    {
      schema: 'generic',
      dataType: 'video',
      name: 'global_video',
      description: '',
      type: 'global',
      value:
        'https://gc.localzoho.com/api/v1/gc/attachment/8cc175e76549955697ede18466fcadde0173a19d68b17b99e9bb6578f98e6488?orgId=61978514'
    },
    {
      schema: 'generic',
      dataType: 'audio',
      name: 'global_audio',
      description: '',
      type: 'global',
      value:
        'https://gc.localzoho.com/api/v1/gc/attachment/676eb2af0269530f162f95fdf916240894492528c018c19fbb6b45bd3a704fe2?orgId=61978514'
    },
    {
      schema: 'generic',
      dataType: 'image',
      name: 'image11',
      description: '',
      type: 'global',
      value:
        'https://gc.localzoho.com/api/v1/gc/attachment/523a6ce85089c6329b3d496ac678d0da0b0c4ec0622dcba394c5b97d3755dd48?orgId=61978514'
    },
    {
      schema: 'generic',
      dataType: 'audio',
      name: 'audio1',
      description: '',
      type: 'global',
      value:
        'https://gc.localzoho.com/api/v1/gc/attachment/e073149e45b107849a0b5dbdbe9e5891517e0473aeb521b4b4deac3364c73116?orgId=61978514'
    },
    {
      schema: 'generic',
      dataType: 'string',
      name: 'contactId',
      description: '',
      type: 'flow',
      value: '83648000000187373'
    },
    {
      schema: 'generic',
      dataType: 'number',
      name: 'global_number',
      description: '',
      type: 'global',
      value: '11111'
    }
  ],
  initialBlockId: '344000000292525',
  blocks: [
    {
      variableName: 'classifications',
      question: '<div>Choose&nbsp;Classifications</div>',
      name: 'Classifications',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292533',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787781',
            label: 'Workflows',
            fieldType: 'text_button'
          },
          {
            id: '344000000787783',
            label: 'Custom Functions',
            fieldType: 'text_button'
          },
          {
            id: '344000000787785',
            label: 'Macros',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: false
    },
    {
      fieldProperties: {
        id: '344000000787779',
        fieldType: 'char'
      },
      variableName: 'subject',
      question: '<div>Type your subject</div>',
      name: 'Subject',
      isEndBlock: false,
      skip: false,
      id: '344000000292539',
      type: 'user_input'
    },
    {
      variableName: 'zohoDesk',
      question:
        '<div>Zoho Desk is the industry&#39;s first context-aware help desk software that helps businesses focus on the customer.</div>',
      name: 'Zoho Desk',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292557',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787765',
            label: 'Submit a request',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: true
    },
    {
      destinationBlock: {
        name: 'Subject',
        id: '344000000292539',
        type: 'user_input'
      },
      destinationFlow: {
        name: 'Submit a request',
        id: '344000000291883'
      },
      name: 'jump 01',
      isEndBlock: false,
      id: '344000000292563',
      type: 'jump'
    },
    {
      variableName: 'chooseDepartment',
      question:
        '<div>Please choose any of the department to submit your Request.</div>',
      name: 'choose department',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292543',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787759',
            label: 'Zoho Desk',
            fieldType: 'text_button'
          },
          {
            id: '344000000787761',
            label: 'Zoho CRM',
            fieldType: 'text_button'
          },
          {
            id: '344000000787763',
            label: 'Zoho People',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: true
    },
    {
      variableName: 'dataMigration',
      question: '<div>Migration Type</div>',
      name: 'Data Migration',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292549',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787773',
            label: 'Freshdesk',
            fieldType: 'text_button'
          },
          {
            id: '344000000787775',
            label: 'Zendesk',
            fieldType: 'text_button'
          },
          {
            id: '344000000787777',
            label: 'Happyfox',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: false
    },
    {
      headers: [],
      method: 'post',
      queryParams: [],
      errorMessage:
        '<div>Something went wrong. Please restart the chat to try again.<br /></div>',
      isEndBlock: false,
      type: 'webhook',
      url: 'https://deskclient.localzoho.com/api/v1/tickets',
      payloadType: 'json',
      jsonPayload:
        '{"subject":"@{subject}","departmentId":"@{departmentId}","contactId":"@{contactId}"}',
      name: 'Submit ticket ',
      outputVariables: [
        {
          variables: [
            {
              schema: 'generic',
              responsePath: 200,
              dataType: 'number',
              responseVariableType: 'status',
              guideVariable: 'SubmitTicket_status'
            },
            {
              schema: 'generic',
              responsePath: '/ticketNumber',
              dataType: 'string',
              responseVariableType: 'user',
              guideVariable: 'TicketNumber'
            },
            {
              schema: 'generic',
              responsePath: '/webUrl',
              dataType: 'string',
              responseVariableType: 'user',
              guideVariable: 'TicketUrl'
            }
          ],
          code: '200'
        }
      ],
      id: '344000000787755',
      connectionName: 'deskticketcreationlink'
    },
    {
      fieldProperties: {
        id: '344000000787757',
        fieldType: 'char'
      },
      variableName: 'description',
      question: '<div>Description</div>',
      name: 'Description',
      isEndBlock: false,
      skip: false,
      id: '344000000292535',
      type: 'user_input'
    },
    {
      fieldProperties: {
        id: '344000000787813',
        fieldType: 'char'
      },
      variableName: 'userName',
      question: '<div>Enter your name<br /></div>',
      name: 'user name',
      isEndBlock: false,
      skip: false,
      id: '344000000292531',
      type: 'user_input'
    },
    {
      variableName: 'requestType',
      question: '<div>How critical is your request?</div>',
      name: 'Request Type',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292547',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787791',
            label: 'Nothing Urgent can wait Just',
            fieldType: 'text_button'
          },
          {
            id: '344000000787793',
            label: 'Just FYI',
            fieldType: 'text_button'
          },
          {
            id: '344000000787795',
            label: 'Emergency',
            fieldType: 'text_button'
          },
          {
            id: '344000000787797',
            label: 'Im stuck need assistance',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: false
    },
    {
      fieldProperties: {
        id: '344000000787767',
        fieldType: 'email'
      },
      variableName: 'email',
      question: '<div>Enter your email address</div>',
      name: 'email',
      isEndBlock: false,
      skip: false,
      id: '344000000292529',
      type: 'user_input'
    },
    {
      question: '<div>Welcome to Zoho Cares</div>',
      name: 'Welcome message',
      isEndBlock: false,
      id: '344000000292525',
      type: 'message'
    },
    {
      fieldProperties: {
        id: '344000000787769',
        fieldType: 'char'
      },
      variableName: 'meetingCount',
      question: '<div>Meeting Count</div>',
      name: 'Meeting Count',
      isEndBlock: false,
      skip: false,
      id: '344000000292553',
      type: 'user_input'
    },
    {
      variableName: 'featureStatus',
      question: '<div>Feature Status</div>',
      name: 'Feature Status',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292559',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787807',
            label: 'Raised',
            fieldType: 'text_button'
          },
          {
            id: '344000000787809',
            label: 'Promised',
            fieldType: 'text_button'
          },
          {
            id: '344000000787811',
            label: 'Rejected',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: false
    },
    {
      destinationBlock: {
        name: 'Subject',
        id: '344000000292539',
        type: 'user_input'
      },
      destinationFlow: {
        name: 'Submit a request',
        id: '344000000291883'
      },
      name: 'Jump 02',
      isEndBlock: false,
      id: '344000000292527',
      type: 'jump'
    },
    {
      question:
        '<div>Hi&nbsp;<span class="block" style="display: inline-block">&nbsp;@{userName}&nbsp;</span>&nbsp;, Thanks for your submit a request Ticket Number :&nbsp;<span contenteditable="false" class="gc_block" style="display: inline">&nbsp;@{TicketNumber}&nbsp;</span>.<br /></div><div>We can get back to you as soon as possible.<br /></div><div>Thanks<br /></div>',
      name: 'Thanks message',
      isEndBlock: false,
      id: '344000000292541',
      type: 'message'
    },
    {
      fieldProperties: {
        formats: ['jpeg', 'png', 'gif', 'tiff', 'bmp', 'heic'],
        size: '14000000',
        id: '344000000787787',
        type: 'image',
        fieldType: 'media'
      },
      variableName: 'attachment',
      question: '<div>Attach a file</div>',
      name: 'Attachment',
      isEndBlock: false,
      skip: false,
      id: '344000000292545',
      type: 'user_input'
    },
    {
      variableName: 'zohoCRM',
      question:
        '<div>Everlasting customer relationships are built on the world&#39;s favorite CRM</div>',
      name: 'Zoho CRM',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292555',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787789',
            label: 'Submit a request',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: true
    },
    {
      fieldProperties: {
        format: 'integer',
        id: '344000000787771',
        fieldType: 'number'
      },
      variableName: 'phone',
      question: '<div>Enter your phone number<br /></div>',
      name: 'Phone',
      isEndBlock: false,
      skip: false,
      id: '344000000292551',
      type: 'user_input'
    },
    {
      variableName: 'typeOfTask',
      question: '<div>Type of Task</div>',
      name: 'Type of Task',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292537',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787801',
            label: 'DC Migration',
            fieldType: 'text_button'
          },
          {
            id: '344000000787803',
            label: 'Data Backup',
            fieldType: 'text_button'
          },
          {
            id: '344000000787805',
            label: 'Data Migration',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: false
    },
    {
      variableName: 'zohoPeople',
      question:
        '<div>We take care of your HR processes while you take care of your employees. From hiring, onboarding and attendance management to time tracking and appraisals, we&#39;ve got it all covered</div>',
      name: 'Zoho People',
      isEndBlock: false,
      selectType: 'single',
      skip: false,
      id: '344000000292561',
      type: 'user_choice',
      fields: {
        showType: 'list',
        choices: [
          {
            id: '344000000787799',
            label: 'Submit a request',
            fieldType: 'text_button'
          }
        ],
        fieldType: 'text_button'
      },
      isMultiPath: true
    }
  ],
  flowValidationErrors: [],
  startOverBlockId: null,
  flowVersions: ['draft', 'published'],
  jumpToInfos: {
    344000000292539: {
      flows: [],
      blocks: [
        {
          name: 'jump 01',
          isEndBlock: false,
          id: '344000000292563',
          type: 'jump'
        },
        {
          name: 'Jump 02',
          isEndBlock: false,
          id: '344000000292527',
          type: 'jump'
        }
      ]
    }
  },
  flowId: '344000000291883',
  flowStatus: 'published'
};
