import { useState } from 'react';
import { Calendar, Clock, MoreVertical, Tag, MessageSquare, Paperclip, Users } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  deadline: string;
  tags: string[];
  assignees: string[];
  comments: number;
  attachments: number;
  priority: 'low' | 'medium' | 'high';
  subtasksCompleted: number;
  subtasksTotal: number;
  estimatedTime: number; // in hours
  dependencies?: string[]; // optional
}

function Board() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Design System Updates',
      description: 'Update color palette and typography in the design system. Include new component variants and document usage guidelines.',
      status: 'todo',
      deadline: '2024-03-25',
      tags: ['design', 'documentation'],
      assignees: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'],
      comments: 3,
      attachments: 2,
      priority: 'high',
      subtasksCompleted: 2,
      subtasksTotal: 4,
      estimatedTime: 5,
      dependencies: ['User Authentication']
    },
    {
      id: '2',
      title: 'User Authentication',
      description: 'Implement OAuth2 authentication flow with support for multiple providers. Include email verification and password reset functionality.',
      status: 'in-progress',
      deadline: '2024-03-20',
      tags: ['security', 'backend'],
      assignees: [
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
      ],
      comments: 5,
      attachments: 1,
      priority: 'high',
      subtasksCompleted: 1,
      subtasksTotal: 3,
      estimatedTime: 8,
      dependencies: []
    },
    {
      id: '3',
      title: 'API Documentation',
      description: 'Write comprehensive API documentation including endpoints, request/response examples, and error handling guidelines.',
      status: 'review',
      deadline: '2024-03-18',
      tags: ['documentation', 'api'],
      assignees: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'],
      comments: 2,
      attachments: 3,
      priority: 'medium',
      subtasksCompleted: 3,
      subtasksTotal: 3,
      estimatedTime: 4,
      dependencies: []
    },
    {
      id: '4',
      title: 'Bug Fixes',
      description: 'Fix reported issues in the dashboard including performance optimizations and UI improvements.',
      status: 'done',
      deadline: '2024-03-15',
      tags: ['bugs', 'optimization'],
      assignees: ['https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'],
      comments: 8,
      attachments: 4,
      priority: 'low',
      subtasksCompleted: 5,
      subtasksTotal: 5,
      estimatedTime: 2,
      dependencies: []
    },
  ]);

  const [newTask, setNewTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
    status: 'todo',
    deadline: '',
    tags: [],
    assignees: [],
    comments: 0,
    attachments: 0,
    priority: 'low',
    subtasksCompleted: 0,
    subtasksTotal: 0,
    estimatedTime: 0,
    dependencies: []
  });

  const [isAddingTask, setIsAddingTask] = useState(false);

  const handleAddTask = () => {
    if (!newTask.title || !newTask.deadline) {
      alert('Please fill in the required fields (Title and Deadline).');
      return;
    }

    setTasks(prevTasks => [
      ...prevTasks,
      { ...newTask, id: (prevTasks.length + 1).toString() }
    ]);
    setNewTask({
      id: '',
      title: '',
      description: '',
      status: 'todo',
      deadline: '',
      tags: [],
      assignees: [],
      comments: 0,
      attachments: 0,
      priority: 'low',
      subtasksCompleted: 0,
      subtasksTotal: 0,
      estimatedTime: 0,
      dependencies: []
    });
    setIsAddingTask(false);
  };

  const columns = [
    { id: 'todo', title: 'To Do', color: 'bg-gray-100' },
    { id: 'in-progress', title: 'In Progress', color: 'bg-blue-50' },
    { id: 'review', title: 'Review', color: 'bg-yellow-50' },
    { id: 'done', title: 'Done', color: 'bg-green-50' },
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'; 
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Board Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Project Board</h1>
              <p className="text-gray-600">Track and manage project tasks</p>
            </div>
            <button
              onClick={() => setIsAddingTask(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
            >
              Add New Task
            </button>
          </div>
        </div>

        {/* Add Task Form */}
        {isAddingTask && (
          <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Task</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Task Title"
                value={newTask.title}
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                className="border border-gray-300 rounded-lg p-2"
              />
              <input
                type="date"
                value={newTask.deadline}
                onChange={e => setNewTask({ ...newTask, deadline: e.target.value })}
                className="border border-gray-300 rounded-lg p-2"
              />
              <textarea
                placeholder="Task Description"
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 col-span-1 md:col-span-2"
              />
              <select
                value={newTask.priority}
                onChange={e => setNewTask({ ...newTask, priority: e.target.value as 'low' | 'medium' | 'high' })}
                className="border border-gray-300 rounded-lg p-2"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
              <input
                type="number"
                placeholder="Estimated Time (hours)"
                value={newTask.estimatedTime}
                onChange={e => setNewTask({ ...newTask, estimatedTime: parseInt(e.target.value) || 0 })}
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsAddingTask(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Add Task
              </button>
            </div>
          </div>
        )}

        {/* Board Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map(column => (
            <div key={column.id} className={`${column.color} rounded-lg p-4`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-700">{column.title}</h2>
                <span className="bg-white px-2 py-1 rounded-full text-sm text-gray-600">
                  {getTasksByStatus(column.id).length}
                </span>
              </div>
              
              <div className="space-y-3">
                {getTasksByStatus(column.id).map(task => (
                  <div
                    key={task.id}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 relative"
                  >
                    {/* Priority Indicator */}
                    <div
                      className={`absolute top-0 left-0 w-2 h-full rounded-l-lg ${getPriorityColor(task.priority)}`}
                    ></div>

                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">{task.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{task.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {task.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="flex items-center text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full cursor-pointer hover:bg-gray-200"
                        >
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Task Progress */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{task.subtasksCompleted}/{task.subtasksTotal} subtasks done</span>
                        <span>{Math.round((task.subtasksCompleted / task.subtasksTotal) * 100)}% Complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(task.subtasksCompleted / task.subtasksTotal) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Task Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{formatDate(task.deadline)}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          <span>{task.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Paperclip size={14} className="mr-1" />
                          <span>{task.attachments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Assignees */}
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {task.assignees.map((assignee, index) => (
                          <img
                            key={index}
                            src={assignee}
                            alt="Assignee"
                            className="w-6 h-6 rounded-full border-2 border-white"
                          />
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" />
                        <span>Estimated: {task.estimatedTime}h</span>
                      </div>
                    </div>

                    {/* Dependencies */}
                    {task.dependencies && task.dependencies.length > 0 && (
                      <div className="text-sm text-red-500 mt-3">
                        Blocked by: {task.dependencies.map(dep => (
                          <span key={dep} className="underline cursor-pointer hover:text-red-700">{dep}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;